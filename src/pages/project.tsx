import RefreshTop from "../components/refreshpage";
import { ProjectContent } from "../content/project";
import { Layout } from "../layout";

export function Project() {
  return (
    <Layout>
      <RefreshTop />
      <div>
        <ProjectContent />
      </div>
    </Layout>
  );
}
