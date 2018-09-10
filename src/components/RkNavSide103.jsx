function RkNavSide103_links(props) {
  return (
    <ul>
    {props.pr_links.map((i, index) =>
      <li key={i.linkName + index}>
      <a href={i.link} target="iframe_right">{i.linkName}</a> 
      <p>{i.linkDesc}</p>
      </li>
      )}
    </ul>
  );
}

export default class RkNavSide103 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          link: "https://liquidnuker.github.io/tf_rk-router2/",
          linkName: "rk-router2",
          linkDesc: "router 4.xx boilerplate"
        },
        {
          link: "https://liquidnuker.github.io/r_rkPager/",
          linkName: "r_rkPager",
          linkDesc: "react pagination comps"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkModal1/",
          linkName: "rkModal",
          linkDesc: "react modals"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkNavSide1/",
          linkName: "rkNavSide",
          linkDesc: "side navigations"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkArticleBox1/",
          linkName: "rkArticleBox",
          linkDesc: "article box containers"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkCarousel1/",
          linkName: "rkCarousel1",
          linkDesc: "carousel collections"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkItemBox1/",
          linkName: "rkItemBox1",
          linkDesc: "itemBox containers"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkMediaBox1/",
          linkName: "rkMediaBox1",
          linkDesc: "mediaBox containers"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkFaqList1/",
          linkName: "rkFaqList1",
          linkDesc: "faq list components"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkTabs1/",
          linkName: "rkTabs1",
          linkDesc: "react tabs"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkInfoSpan1/",
          linkName: "rkInfoSpan1",
          linkDesc: "info span with icons"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkListCollapse/",
          linkName: "rkListCollapse",
          linkDesc: "collapsible lists"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkHeaderBox1/",
          linkName: "rkHeaderBox1",
          linkDesc: "header containers"
        },
        {
          link: "https://liquidnuker.github.io/r_comps_rkSelect1/",
          linkName: "rkSelect1",
          linkDesc: "react select component"
        },
      ]
    };

    // 
    // this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // property1: store.state
    }));
  }

  render() {
    return (
      <nav className="rknavSide103" role="navigation">
        <RkNavSide103_links pr_links={this.state.links} />
      </nav>
    );
  }
}