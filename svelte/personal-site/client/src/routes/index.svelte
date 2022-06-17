<script>
  import { Router, Route } from 'svelte-routing';
  import About from '../components/About.svelte';
  import Education from '../components/Education.svelte';
  import Work from '../components/Work.svelte';
  import Life from '../components/Life.svelte';
  import Resume from '../components/Resume.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="education" component={Education} />
    <Route path="work" component={Work} />
    <Route path="life" component={Life} />
    <Route path="resume" component={Resume}/>
    <Route path="/" component={About} />
  </div>
</Router>