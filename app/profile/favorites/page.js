function FavoriteItems() {
    return (
        <div>
            <h5 className="text-lg font-semibold my-6">My favourite Items</h5>
            <div className="rounded-md shadow dark:shadow-gray-800 p-6">
                <ul>
                    <li className="flex justify-between items-center pb-6">
                        <div className="flex items-center">
                            <img src="assets/images/shop/apple-smart-watch.jpg" className="rounded shadow dark:shadow-gray-800 w-16" alt />
                            <div className="ms-4">
                                <a href="" className="font-semibold hover:text-orange-500">
                                    Apple Smart Watch
                                </a>
                                <p className="text-green-600 text-sm mt-1">
                                    $16.00 <del className="text-red-600">$21.00</del>
                                </p>
                            </div>
                        </div>
                        <div>
                            <a
                                href
                                className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full"
                            >
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
                                    className="feather feather-trash-2 h-4 w-4"
                                >
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FavoriteItems;
