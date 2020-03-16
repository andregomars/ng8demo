import { Injectable, RendererFactory2, ViewEncapsulation } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LinkService {

    constructor(
        private rendererFactory: RendererFactory2,
    ) {
    }

    /**
     * Inject the State into the bottom of the <head>
     */
    addTag(tag: LinkDefinition, forceCreation?: boolean) {

        try {
            const renderer = this.rendererFactory.createRenderer(document, {
                id: '-1',
                encapsulation: ViewEncapsulation.None,
                styles: [],
                data: {}
            });

            const link = renderer.createElement('link');
            const head = document.head;
            const selector = this._parseSelector(tag);

            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }

            Object.keys(tag).forEach((prop: string) => {
                return renderer.setAttribute(link, prop, tag[prop]);
            });

            // [TODO]: get them to update the existing one (if it exists) ?
            renderer.appendChild(head, link);

        } catch (e) {
            console.error('Error within linkService : ', e);
        }
    }

    /**
     * Create or update a link tag
     * @param  {LinkDefinition} tag
     */
    public updateTag(tag: LinkDefinition): void {
        const selector = this._parseSelector(tag);
        const linkElement = document.head.querySelector(selector) as HTMLLinkElement
            || document.head.appendChild(document.createElement('link'));

        if (linkElement) {
            Object.keys(tag).forEach((prop: string) => {
                linkElement[prop] = tag[prop];
            });
        }
    }

    /**
     * Remove a link tag from DOM
     * @param  tag
     */
    public removeTag(tag: LinkDefinition): void {
        const selector = this._parseSelector(tag);
        const linkElement = document.head.querySelector(selector) as HTMLLinkElement;

        if (linkElement) {
            document.head.removeChild(linkElement);
        }
    }

    /**
     * Get link tag
     * @param  tag
     * @return {HTMLLinkElement}
     */
    public getTag(tag: LinkDefinition): HTMLLinkElement {
        const selector = this._parseSelector(tag);

        return document.head.querySelector(selector);
    }

    /**
     * Get all link tags
     * @return {NodeListOf<HTMLLinkElement>}
     */
    public getTags(): NodeListOf<HTMLLinkElement> {
        return document.head.querySelectorAll('link');
    }

    /**
    * Parse tag to create a selector
    * @param  tag
    * @return {string} selector to use in querySelector
    */
    private _parseSelector(tag: LinkDefinition): string {
        // Possibly re-work this
        const attr: string = tag.rel ? 'rel' : 'hreflang';
        return `link[${attr}="${tag[attr]}"]`;
    }
}

export declare type LinkDefinition = {
    charset?: string;
    crossorigin?: string;
    href?: string;
    hreflang?: string;
    media?: string;
    rel?: string;
    rev?: string;
    sizes?: string;
    target?: string;
    type?: string;
} & {
        [prop: string]: string;
    };