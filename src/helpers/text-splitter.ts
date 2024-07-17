import SplitType from 'split-type'
import {debounce} from './debounce'
import {wrapElement} from '@/helpers/utils'

type SplitTypeOptions = {
    absolute: boolean
    tagName: string
    lineClass: string
    wordClass: string
    charClass: string
    splitClass: string
}

type TextSplitterOption = {
    splitTypes: 'lines' | 'words' | 'chars'
    resizeCallback?: Function
}

export class TextSplitter {
    public splitText: SplitType;
    private textEl: HTMLElement;
    private onResize: any;
    private previousContainerWidth: null | number;
    private splitOptions: Partial<SplitTypeOptions>;

    get lines() {
        return this.splitText.lines || [];
    }

    get words() {
        return this.splitText.words || [];
    }

    get chars() {
        return this.splitText.chars || [];
    }

    constructor(textEl: HTMLElement, options: TextSplitterOption) {
        if (!textEl || !(textEl instanceof HTMLElement)) {
            throw new Error('Invalid text element provided')
        }

        this.previousContainerWidth = null

        const {
            splitTypes,
            resizeCallback,
        } = options

        this.textEl = textEl
        this.splitOptions = splitTypes ? {types: splitTypes} : {}
        this.splitText = new SplitType(this.textEl, this.splitOptions)
        this.onResize = typeof resizeCallback === "function" ? resizeCallback : null

        if (this.onResize) {
            this._initResizeObserver()
        }
    }

    _initResizeObserver() {
        this.previousContainerWidth = null
        const resizeObserver = new ResizeObserver(
            debounce((entries) => this._handleResize(entries), 100)
        )

        resizeObserver.observe(this.textEl)
    }

    _handleResize(entries) {
        const [{contentRect}] = entries
        const width = Math.floor(contentRect.width)

        if (this.previousContainerWidth && this.previousContainerWidth !== width) {
            this.splitText.split(this.splitOptions)
            this._afterResizeCallback()
            this.onResize()
        }
        this.previousContainerWidth = width
    }

    _afterResizeCallback() {}

    revert() {
        return this.splitText.revert()
    }
}

type WrappedTextSplitterOption = TextSplitterOption & {
    wrap?: string;
    wrapClass?: string;
};

export class WrappedTextSplitter extends TextSplitter {
    private wrap: string;
    private wrapClass: string;

    constructor(textEl: HTMLElement, options: WrappedTextSplitterOption) {
        super(textEl, options)

        const {
            wrap,
            wrapClass
        } = options
        this.wrap = wrap || 'line'
        this.wrapClass = wrapClass || 'line-wrap'
        this._wrapElements()
    }

    _wrapElements() {
        if (!this.wrap) return
        wrapElement(this.splitText[this.wrap], 'span', this.wrapClass)
    }

    _afterResizeCallback() {
        super._afterResizeCallback()
        this._wrapElements()
    }
}
