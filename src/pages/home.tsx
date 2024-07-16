import RefreshTop from "../components/refreshpage";
import { HomeContent } from "../content/home";
import { Layout } from "../layout";

export function Home() {
  return (
    <Layout>
      <RefreshTop />
      <div>
        <HomeContent />
      </div>
    </Layout>
  );
}
