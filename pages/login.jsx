import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCurrentUser } from "@/hooks/index";

const LoginPage = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useCurrentUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push("/");
  }, [user]);

  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg("Incorrect username or password. Try again!");
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="inside">
                  <form onSubmit={onSubmit} className="form form-light">
                    <h2 className="form-title">Login</h2>
                    {errorMsg ? (
                      <p style={{ color: "red" }}>{errorMsg}</p>
                    ) : null}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="button button-light">
                      Sign In
                    </button>
                    <Link href="/forget-password">
                      <a className="link link-light">Forgot Fassword?</a>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
