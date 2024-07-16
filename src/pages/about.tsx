import RefreshTop from "../components/refreshpage";
import { AboutContent } from "../content/about";
import { Layout } from "../layout";

export function About() {
  return (
    <Layout>
      <RefreshTop />
      <div>
        <AboutContent />
      </div>
    </Layout>
  );
}
