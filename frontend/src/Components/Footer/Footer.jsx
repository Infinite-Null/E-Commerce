/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css"
import {Link} from "@nextui-org/react";

export function Footer({Contact,Follow,Social}) {
    return (
        <>
            <footer className="bg-gray-900 dark:bg-gray-900 mt-16 text-white">
                <div className="mx-auto p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="flex items-center">
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">E-Commerce</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact Us</h2>
                                <ul className="text-gray-500 dark:text-white font-medium">
                                    {Contact.map((e,i)=> <li className="mb-4" key={i}>
                                        <a href={e.link} target="_blank" rel="noreferrer" className="hover:underline text-white">{e.text}</a>
                                    </li>)}
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    {Follow.map((e,i)=> <li className="mb-4" key={i}>
                                        <a href={e.link} target="_blank" rel="noreferrer" className="hover:underline text-white">{e.text}</a>
                                    </li>)}
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline text-white">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline text-white">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span className="hover:underline">e-commerce™</span>. All Rights Reserved.
          </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            {Social.map((e,i)=><a href={e.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white dark:hover:text-white" key={i}>
                                {e.icon}
                                <span className="sr-only">{e.page + " Pages"}</span>
                            </a>)}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}