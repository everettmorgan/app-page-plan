import { Options, Vue } from 'vue-class-component';
import './Flexbox.css';

@Options({
  props: {
    flexDirection: String,
    alignItems: String,
    justifyContent: String,
  },
})

class Flexbox extends Vue {
  flexDirection!: string;

  alignItems!: string;

  justifyContent!: string;

  render() {
    return (
      <div class="flexbox" style={`
        align-items: ${this.alignItems};
        justify-content: ${this.justifyContent};
        ${this.flexDirection ? `flex-direction :${this.flexDirection};` : ''};
      `}>
        {this.$slots.default ? this.$slots.default() : ''}
      </div>
    );
  }
}

export default Flexbox;
