import React, { Component } from "react";
import { withRouter } from "react-router";
import Helmet from "react-helmet";
import Meta from "../../constants/meta";

const SITE_URL =
  process.env.NODE_ENV === "development"
    ? Meta.default.siteURL
    : Meta.default.siteURL;

const FACEBOOK_APP_ID = "XXXXXXXXX";

const defaultTitle = Meta.default.title;
const defaultDescription = Meta.default.description;
const defaultKeywords = Meta.default.keywords;
const defaultImage = Meta.default.image;
const defaultTwitter = Meta.default.twitter;
const defaultSep = Meta.default.sep;
const defaultUpdated = Meta.default.updated;
const defaultPublished = Meta.default.published;
const defaultContentType = Meta.default.contentType;

class Page extends Component {
  getMetaTags(
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags,
      keywords
    },
    pathname
  ) {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;
    const theImage = image ? `${SITE_URL}${image}` : defaultImage;

    const metaTags = [
      { itemprop: "name", content: theTitle },
      { itemprop: "description", content: theDescription },
      { itemprop: "image", content: theImage },
      { name: "description", content: theDescription },
      { name: "keywords", content: keywords || defaultKeywords },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: defaultTwitter },
      { name: "twitter:title", content: theTitle },
      { name: "twitter:description", content: theDescription },
      { name: "twitter:creator", content: twitter || defaultTwitter },
      { name: "twitter:image:src", content: theImage },
      { property: "og:title", content: theTitle },
      { property: "og:type", content: contentType || defaultContentType },
      { property: "og:url", content: SITE_URL + pathname },
      { property: "og:image", content: theImage },
      { property: "og:description", content: theDescription },
      { property: "og:site_name", content: defaultTitle },
      { property: "fb:app_id", content: FACEBOOK_APP_ID }
    ];

    if (noCrawl) {
      metaTags.push({ name: "robots", content: "noindex, nofollow" });
    } else {
      metaTags.push({ name: "robots", content: "index, follow" });
    }

    if (published) {
      metaTags.push({
        name: "article:published_time",
        content: published || defaultPublished
      });
    }
    if (updated) {
      metaTags.push({
        name: "article:modified_time",
        content: updated || defaultUpdated
      });
    }
    if (category) {
      metaTags.push({ name: "article:section", content: category });
    }
    if (tags) {
      metaTags.push({ name: "article:tag", content: tags });
    }

    return metaTags;
  }

  render() {
    const { children, id, className, ...rest } = this.props;

    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: "en",
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || "WebPage"}`
          }}
          title={
            rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
          }
          link={[
            {
              rel: "canonical",
              href: SITE_URL + this.props.location.pathname
            }
          ]}
          meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        {children}
      </div>
    );
  }
}

export default withRouter(Page);
