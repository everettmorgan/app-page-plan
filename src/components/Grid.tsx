import { Options, Vue } from 'vue-class-component';
import './Grid.css';

@Options({
  props: {
    columns: String,
    rows: String,
    gap: String,
  },
})

class Grid extends Vue {
  columns!: string;

  rows!: string;

  gap!: string;

  render() {
    return (
      <div class="grid" style={`
        grid-template-columns: ${this.columns};
        grid-template-rows: ${this.rows};
        gap: ${this.gap};
      `}>
        {this.$slots.default ? this.$slots.default() : ''}
      </div>
    );
  }
}

export default Grid;
