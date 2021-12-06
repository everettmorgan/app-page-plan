import { Options, Vue } from 'vue-class-component';
import Btn from './components/Btn';
import Grid from './components/Grid';
import Flexbox from './components/Flexbox';
import './App.css';

@Options({
  components: {
    Btn,
    Grid,
    Flexbox,
  },
  props: {
    name: String,
    subtitle: String,
    price: String,
    features: Array,
    term: String,
    currencySymbol: String,
  },
})
class App extends Vue {
  name!: string;

  subtitle!: string;

  price!: string;

  term!: 'monthly' | 'yearly';

  currencySymbol!: string;

  features!: string;

  get planTerm() {
    if (this.term === 'monthly') {
      return '/mo';
    }

    if (this.term === 'yearly') {
      return '/yr';
    }

    return '/mo';
  }

  renderFeatures() {
    return this.features.split(',').map((str: string) => (
      <p class="appPagePlanFeature">
        <span v-html={str.trim()}/>
      </p>
    ));
  }

  render() {
    return (
      <div class="appPagePlan">
        <Grid
          class="appPagePlanInner"
          columns="1fr"
          gap="10px"
          rows="1fr max-content 350px min-content"
        >
          <Flexbox alignItems="center" flexDirection="column">
            <h2 class="appPagePlanName">{this.name}</h2>
            <p class="appPagePlanSub">{this.subtitle}</p>
          </Flexbox>
          <Flexbox alignItems="center" flexDirection="column">
            <h1 class="highlightPlan appPagePlanPrice">
              {this.currencySymbol}{this.price}{this.planTerm}
            </h1>
          </Flexbox>
          <Flexbox flexDirection="column" justifyContent="center">
            {this.renderFeatures()}
          </Flexbox>
          <Flexbox alignItems="center" flexDirection="column">
            <Btn color="duda" rounded="5" size="lg" text="Get started"/>
          </Flexbox>
        </Grid>
      </div>
    );
  }
}

export default App;
