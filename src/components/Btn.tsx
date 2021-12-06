import { Options, Vue } from 'vue-class-component';
import './Btn.css';

@Options({
  props: {
    size: String,
    text: String,
    color: String,
    profile: String,
    block: Boolean,
    rounded: String,
    elevate: String,
    loading: Boolean,
    fontColor: String,
  },
})
class Btn extends Vue {
  text!: string;

  block!: boolean;

  color!: string;

  rounded!: string;

  loading!: boolean;

  elevate!: number;

  fontColor!: string;

  onClick!: any;

  size!: 'xl' | 'lg' | 'md' | 'sm' | 'xs';

  profile!:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'alert'
    | 'success'
    | 'error'
    | 'disabled'
    | 'info';

  // defaults

  sizeDefault = 'md';

  colorDefault = 'grey';

  blockDefault = '';

  profileDefault = '';

  roundedDefault = 0;

  elevateDefault = 0;

  determineClasses() {
    let str = '';

    str += ` ${this.size ?? this.sizeDefault}`;
    str += ` ${this.color ?? this.colorDefault}`;
    str += ` ${this.block ? 'block' : this.blockDefault}`;
    str += ` ${this.profile ?? this.profileDefault}`;
    str += ` rounded-${this.rounded ?? this.roundedDefault}`;
    str += ` elevate-${this.elevate ?? this.elevateDefault}`;

    return str;
  }

  render() {
    return (
      <div class={`button ${this.determineClasses()}`}>
        {this.loading ? 'loading...' : this.text.toUpperCase()}
      </div>
    );
  }
}

export default Btn;
export { Btn };
