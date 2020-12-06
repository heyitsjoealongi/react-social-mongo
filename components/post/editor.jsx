/* Framework */
import React, { useState } from "react";

import { useCurrentUser } from "@/hooks/index";

export default function PostEditor() {
  const [user] = useCurrentUser();

  const [msg, setMsg] = useState(null);

  async function handleSubmit(e) {
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
            onSubmit={handleSubmit}
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
