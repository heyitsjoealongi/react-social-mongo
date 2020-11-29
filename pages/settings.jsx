import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useCurrentUser } from "@/hooks/index";

const ProfileSection = () => {
  const [user, { mutate }] = useCurrentUser();
  const [isUpdating, setIsUpdating] = useState(false);
  const usernameRef = useRef();
  const bioRef = useRef();
  const profilePictureRef = useRef();
  const [msg, setMsg] = useState({ message: "", isError: false });

  useEffect(() => {
    usernameRef.current.value = user.username;
    bioRef.current.value = user.bio;
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isUpdating) return;
    setIsUpdating(true);
    const formData = new FormData();
    if (profilePictureRef.current.files[0]) {
      formData.append("profilePicture", profilePictureRef.current.files[0]);
    }
    formData.append("username", usernameRef.current.value);
    formData.append("bio", bioRef.current.value);
    const res = await fetch("/api/user", {
      method: "PATCH",
      body: formData,
    });
    if (res.status === 200) {
      const userData = await res.json();
      mutate({
        user: {
          ...user,
          ...userData.user,
        },
      });
      setMsg({ message: "Profile updated" });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
    setIsUpdating(false);
  };

  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();
    const body = {
      oldPassword: e.currentTarget.oldPassword.value,
      newPassword: e.currentTarget.newPassword.value,
    };
    e.currentTarget.oldPassword.value = "";
    e.currentTarget.newPassword.value = "";

    const res = await fetch("/api/user/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: "Password updated" });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  };

  async function sendVerificationEmail() {
    const res = await fetch("/api/user/email/verify", {
      method: "POST",
    });
    if (res.status === 200) {
      setMsg({ message: "An email has been sent to your mailbox" });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="welcome-message">
                <h2>{user ? user.username : "Archtyper"}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="inside">
                  <form onSubmit={handleSubmit} className="form form-light">
                    <h4>Edit Profile</h4>
                    <div className="form-group">
                      <label htmlFor="avatar">Profile picture</label>
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/png, image/jpeg"
                        ref={profilePictureRef}
                        className="form-control-file"
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        ref={usernameRef}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea
                        id="bio"
                        name="bio"
                        type="text"
                        placeholder="Bio"
                        ref={bioRef}
                        className="form-control"
                        rows="3"
                      ></textarea>
                    </div>
                    <button
                      disabled={isUpdating}
                      type="submit"
                      className="button button-light button-inline"
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="content">
                <div className="inside">
                  <form
                    onSubmit={handleSubmitPasswordChange}
                    className="form form-light"
                  >
                    <h4>Change Password</h4>
                    <div className="form-group">
                      <label htmlFor="oldpassword">Old Password</label>
                      <input
                        required
                        type="password"
                        id="oldpassword"
                        name="oldPassword"
                        placeholder="Old Password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="newpassword">New Password</label>
                      <input
                        required
                        type="password"
                        id="newpassword"
                        name="newPassword"
                        placeholder="New Password"
                        className="form-control"
                      />
                    </div>
                    <button
                      type="submit"
                      className="button button-light button-inline"
                    >
                      Save Changes
                    </button>
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

const SettingPage = () => {
  const [user] = useCurrentUser();

  if (!user) {
    return (
      <>
        <p>Please Sign In</p>
      </>
    );
  }
  return (
    <>
      <ProfileSection />
    </>
  );
};

export default SettingPage;
