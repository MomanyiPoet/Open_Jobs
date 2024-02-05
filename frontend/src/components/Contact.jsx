import React from 'react'

function Contact() {
  return (
    <section className="py-8 scroll-m-12" id="contact-us">
            <div className="bg-whity rounded-3xl shadow-2xl px-8 py-8 md:py-12">
                <div className="max-w-xl mx-auto text-center py-4">
                    <h4 className="text-secondary font-semibold text-4xl">Get In Touch</h4>
                    <p className="py-2 text-secondary font-light">
                        We are available to offer our support and respond 
                        to inquiries that you may have. We are excitedly 
                        anticipating hearing from you.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="flex flex-col text-secondary px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                        <h5 className="text-secondary font-semibold text-2xl text-center">Reach Out to <span className="text-primary">Open Jobs</span></h5>
                        <p className="py-4 text-secondary font-light text-sm text-justify">
                            Looking for something specific? See below for contacts 
                            related to your inquiry. If you don’t find what you need, 
                            fill out our contact form.
                        </p>
                        <p className="py-2 text-primary font-semibold text-sm">GENERAL INQUIRIES</p>
                        <p className="text-secondary font-light text-sm">(+254) 700 013 897</p>
                        <p className="text-secondary font-light text-sm">openjobs@gmail.com</p>
                    </div>
                    <div className="px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                        <form method="post">
                            <div>
                                <label className="form-control w-full max-w-2xl py-2">
                                    <div className="label">
                                        <span className="label-text text-secondary">Name</span>
                                    </div>
                                    <input type="text" placeholder="You can call me..." className="input input-bordered w-full italic shadow-md text-secondary text-sm bg-whity" required />
                                </label>

                                <label className="form-control w-full max-w-2xl py-2">
                                    <div className="label">
                                        <span className="label-text text-secondary">Email</span>
                                    </div>
                                    <input type="email" placeholder="You can reach me at..." className="input input-bordered w-full italic shadow-md text-secondary text-sm bg-whity" required />
                                </label>

                                <label className="form-control w-full max-w-2xl py-2">
                                    <div className="label">
                                        <span className="label-text text-secondary">Message</span>
                                    </div>
                                    <textarea className="textarea textarea-bordered h-24 italic shadow-md text-secondary text-sm bg-whity" placeholder="I would like to say that..." required></textarea>
                                </label>

                                <label className="form-control w-full max-w-2xl py-6">
                                    <div className="text-whity font-semibold text-end">
                                        <button value="submit" className="bg-primary hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-500 py-2 px-4 rounded-3xl">Submit</button>
                                    </div>
                                </label>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact