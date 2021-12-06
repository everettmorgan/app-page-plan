/* eslint-disable */
declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export = classes;
}

/* eslint-disable */

import Vue, {VNode} from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {
    }

    interface ElementClass extends Vue {
    }

    interface ElementAttributesProperty {
      $props: {};
    }

    interface IntrinsicElements {
      [elemName: string]: any;
    }

    interface IntrinsicAttributes {
      [key: string]: any;
    }
  }
}
