import React from 'react'

const Header = () => {
  return (
    <>
      <section>
        <div className="my-4 py-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
          <div className="text-center">
            <h3 className="text-whity font-semibold text-xl">Terms & Conditions Page</h3>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
          <div>
            <div className="flex justify-start px-8 md:px-16">
              <h1 className="-mt-12 text-xl sm:text-4xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">Terms & Conditions</h1>
            </div>

            <div className="py-4 text-secondary text-justify text-sm md:text-base">

              <ol className='list-[decimal] list-inside'>
                <div className='py-2'>
                  <li className='font-medium'>Overview</li>
                  <p className="italic py-2">
                    These terms and conditions outline the rules and regulations for the use of open Job Website,
                    located at https://openjobs.com. <br /><br />
                    By accessing this website we assume you accept these terms and conditions. Do not continue to
                    use open jobs website if you do not agree to take all of the terms and conditions stated on this page.
                    Our Terms and Conditions were created with the help of the Terms And Conditions Generator and
                    the Free Terms & Conditions Generator.
                  </p>
                </div>

                <div className='py-2'>
                  <li className='font-medium'>Binding agreement and variations</li>
                  <p className="italic py-2">
                    We may update these Terms from time to time and the updated version will apply to you. Our
                    current Terms will be accessible through our website. <br /><br />
                    If we reasonably believe that changes to these Terms will be materially detrimental to Users, we
                    will provide a notice on our websites an 30 days prior to the changes taking effect.
                  </p>
                </div>

                <div className='py-2'>
                  <li className='font-medium'>Availability of our website</li>
                  <p className="italic py-2">
                    Although we aim to offer you the best service possible, we make no promise that our website will
                    meet your requirements <br /><br />
                    We cannot guarantee that our website will be uninterrupted, fault-free, error-free, or that our
                    website servers are free of viruses or other harmful mechanisms. If a fault occurs with our website
                    you should report it to us and we will attempt to correct the fault as soon as we can. <br /><br />
                    Your access to our website may be occasionally restricted to allow for repairs, maintenance or the
                    introduction of new content, facilities or services. We will attempt to restore access and/or service
                    as soon as we reasonably can
                  </p>
                </div>

                <div className='py-2'>
                  <li className='font-medium'>Use of our Website</li>
                  <p className="italic py-2">
                    <span className='font-semibold text-primary'>Dos</span> <br />
                    Comply with all applicable laws, including, without limitation, privacy laws, intellectual property
                    laws, anti-spam laws, export control laws, tax laws, and regulatory requirements <br /><br />

                    <span className='font-semibold text-primary'>Don'ts</span> <br />
                    Override any security feature or bypass or circumvent any access controls or use limits of the
                    Service (such as caps on keyword searches or profile views); <br /><br />
                    Copy, use, disclose or distribute any information obtained from the Services, whether directly or
                    through third parties (such as search engines), without the consent of open jobs
                  </p>
                </div>

                <div className='py-2'>
                  <li className='font-medium'>Third party websites</li>
                  <p className="italic py-2">
                    We may provide links and pointers to internet sites maintained by third parties from our websites
                    and apps. Such linked sites are not under our control and we are not responsible for the contents
                    (including the accuracy, legality or decency) of any linked site or any link contained in a linked
                    site. We are providing these links to you only as a convenience, and the inclusion of any link does
                    not imply endorsement by us of the linked site. We are not responsible for the copyright
                    compliance of any linked site. To the maximum extent permitted by law, we will not be liable for
                    any damages or loss arising in any way out of or in connection with or incidental to any information
                    or third party service provided by any third party.
                  </p>

                  <br />
                    <h6 className='text-lg font-semibold'>Advertising and sponsorship policy</h6>
                    <ol className='list-[lower-alpha] list-inside py-2'>
                        <li>
                            Part of our websites and apps may contain advertising and sponsorship. Advertisers and
                            sponsors are responsible for ensuring that material submitted for inclusion on our websites
                            and apps complies with relevant laws and codes.
                        </li>
                        <li>
                            We reserve the right to refuse to run any advertisements that, in our sole discretion, are not
                            suitable for publication on any of our websites and apps.
                        </li>
                        <li>
                            We will not be responsible to you for any error or inaccuracy in advertising and sponsorship
                            material.
                        </li>
                    </ol>
                </div>

                <div className='py-2'>
                  <li className='font-medium'>Cancellation Policy</li>
                  <p className="italic py-2">
                    You are free to cancel your OpenJobs.com account at any time. Cancellation requests must be sent
                    via our contact page.
                  </p>
                </div>

              </ol>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header