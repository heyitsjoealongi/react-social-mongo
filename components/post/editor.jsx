/* Framework */
import React, { useState } from "react";

/* SVG */
import Brand from "../../public/archtyped.svg";

import { useCurrentUser } from "@/hooks/index";

export default function PostEditor() {
  const [user] = useCurrentUser();

  const [msg, setMsg] = useState(null);

  if (!user) {
    return (
      <div style={{ color: "#555", textAlign: "center" }}>
        Please sign in to post
      </div>
    );
  }

  async function hanldeSubmit(e) {
    e.preventDefault();
    const body = {
      content: e.currentTarget.content.value,
    };
    if (!e.currentTarget.content.value) return;
    e.currentTarget.content.value = "";
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      setMsg("Posted!");
      setTimeout(() => setMsg(null), 5000);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <form
            onSubmit={hanldeSubmit}
            autoComplete="off"
            className="form-inline form-inline-light"
          >
            <div className="form-group">
              <label htmlFor="content" className="sr-only" />
              <input
                id="content"
                name="content"
                type="text"
                placeholder="Hit the lights"
                className="form-control"
              />
            </div>
            <button type="submit" className="button button-cta">
              Create Void
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
