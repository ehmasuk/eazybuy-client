function ProfileInfo() {
    return (
        <div>
            <div>
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                    <form>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <label className="form-label font-medium">
                                    First Name : <span className="text-red-600">*</span>
                                </label>
                                <div className="form-icon relative mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user w-4 h-4 absolute top-3 start-4"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                    <input
                                        type="text"
                                        className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="First Name:"
                                        id="firstname"
                                        name="name"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="form-label font-medium">
                                    Last Name : <span className="text-red-600">*</span>
                                </label>
                                <div className="form-icon relative mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user-check w-4 h-4 absolute top-3 start-4"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="8.5" cy={7} r={4} />
                                        <polyline points="17 11 19 13 23 9" />
                                    </svg>
                                    <input
                                        type="text"
                                        className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="Last Name:"
                                        id="lastname"
                                        name="name"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="form-label font-medium">
                                    Your Email : <span className="text-red-600">*</span>
                                </label>
                                <div className="form-icon relative mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-mail w-4 h-4 absolute top-3 start-4"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <input
                                        type="email"
                                        className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="Email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="form-label font-medium">Occupation : </label>
                                <div className="form-icon relative mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-bookmark w-4 h-4 absolute top-3 start-4"
                                    >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <input
                                        name="name"
                                        id="occupation"
                                        type="text"
                                        className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="Occupation :"
                                    />
                                </div>
                            </div>
                        </div>
                        {/*end grid*/}
                        <div className="grid grid-cols-1">
                            <div className="mt-5">
                                <label className="form-label font-medium">Description : </label>
                                <div className="form-icon relative mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-message-circle w-4 h-4 absolute top-3 start-4"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                    </svg>
                                    <textarea
                                        name="comments"
                                        id="comments"
                                        className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                        placeholder="Message :"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                        <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md mt-5"
                            defaultValue="Save Changes"
                        />
                    </form>
                    {/*end form*/}
                </div>
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
                            <form>
                                <div className="grid grid-cols-1 gap-5">
                                    <div>
                                        <label className="form-label font-medium">Phone No. :</label>
                                        <div className="form-icon relative mt-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-phone w-4 h-4 absolute top-3 start-4"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                            <input
                                                name="number"
                                                id="number"
                                                type="number"
                                                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Phone :"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label font-medium">Website :</label>
                                        <div className="form-icon relative mt-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-globe w-4 h-4 absolute top-3 start-4"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <line x1={2} y1={12} x2={22} y2={12} />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                            <input
                                                name="url"
                                                id="url"
                                                type="url"
                                                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Url :"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*end grid*/}
                                <button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md mt-5">
                                    Add
                                </button>
                            </form>
                        </div>
                        {/*end col*/}
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
                            <form>
                                <div className="grid grid-cols-1 gap-5">
                                    <div>
                                        <label className="form-label font-medium">Old password :</label>
                                        <div className="form-icon relative mt-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-key w-4 h-4 absolute top-3 start-4"
                                            >
                                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                            </svg>
                                            <input
                                                type="password"
                                                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Old password"
                                                required
                                                autoComplete="off"
                                                style={{
                                                    backgroundImage: 'url("chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/web_access/vault-input-disabled.svg") !important',
                                                    backgroundRepeat: "no-repeat !important",
                                                    backgroundPosition: "calc(100% - 3px) center !important",
                                                    backgroundSize: "14px !important",
                                                    backgroundClip: "border-box !important",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label font-medium">New password :</label>
                                        <div className="form-icon relative mt-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-key w-4 h-4 absolute top-3 start-4"
                                            >
                                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                            </svg>
                                            <input
                                                type="password"
                                                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="New password"
                                                required
                                                autoComplete="off"
                                                style={{
                                                    backgroundImage: 'url("chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/web_access/vault-input-disabled.svg") !important',
                                                    backgroundRepeat: "no-repeat !important",
                                                    backgroundPosition: "calc(100% - 3px) center !important",
                                                    backgroundSize: "14px !important",
                                                    backgroundClip: "border-box !important",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label font-medium">Re-type New password :</label>
                                        <div className="form-icon relative mt-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-key w-4 h-4 absolute top-3 start-4"
                                            >
                                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                            </svg>
                                            <input
                                                type="password"
                                                className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                placeholder="Re-type New password"
                                                required
                                                autoComplete="off"
                                                style={{
                                                    backgroundImage: 'url("chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/web_access/vault-input-disabled.svg") !important',
                                                    backgroundRepeat: "no-repeat !important",
                                                    backgroundPosition: "calc(100% - 3px) center !important",
                                                    backgroundSize: "14px !important",
                                                    backgroundClip: "border-box !important",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*end grid*/}
                                <button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md mt-5">
                                    Save password
                                </button>
                            </form>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                    <h5 className="text-lg font-semibold mb-5 text-red-600">Delete Account :</h5>
                    <p className="text-slate-400 mb-4">Do you want to delete the account? Please press below "Delete" button</p>
                    <a href className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-600 text-white rounded-md">
                        Delete
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
