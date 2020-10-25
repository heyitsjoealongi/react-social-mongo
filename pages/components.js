/* Frameworks */
import React from "react";

/* Components */
import Navigation from "../components/higher-order-components/Navigation";
import Modals from "../components/Modals";
import Links from "../components/Links";
import LinksHashtags from "../components/LinksHashtags";
import StreamingContainer from "../components/higher-order-components/StreamingContainer";
import AnnouncementItem from "../components/AnnouncementItem";
import SponsorItem from "../components/SponsorItem";
import ContentItem from "../components/ContentItem";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <h4>Signup/Login</h4>
            <Modals />
            <h4>Sub Navigation</h4>
            <Links />
            <h4>Hashtags</h4>
            <LinksHashtags />
          </div>
          <div className="col-lg-8">
            <StreamingContainer />
          </div>
          <div className="col-lg-2">
            <h4>Announcements</h4>
            <AnnouncementItem />
            <h4>Sponsored</h4>
            <SponsorItem />
            <h4>Categories</h4>
            <ContentItem />
          </div>
        </div>
      </div>
    </>
  );
}
