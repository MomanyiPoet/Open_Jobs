import React from 'react'

const Header = () => {
  return ( 
    <>
      <section>
        <div className="my-4 py-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
          <div className="text-center">
            <h3 className="text-whity font-semibold text-2xl">Privacy Page</h3>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
          <div>
            <div className="flex justify-start px-8 md:px-16">
              <h1 className="-mt-12 text-3xl sm:text-4xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">Privacy Policy</h1>
            </div>

            <div className="py-4 text-secondary text-justify text-sm md:text-base">
              <p className="italic py-2">
                Our Open jobs Notice of Privacy Practices describes how we use and disclose your protected health
                information or PHI, our legal duties with respect to your PHI, and your rights with respect to your 
                PHI and how you may exercise them
              </p>

              <br />
              <h6 className='text-lg font-semibold'>Use of cookies</h6>
              <ol className='list-[lower-alpha] list-inside'>
                <div className='py-2'>
                  <li className='font-medium'>General - Purpose – Term</li>
                  <p className="italic py-2">
                    To allow all Internet Users a better browsing on this Site and better service of the different
                    interfaces and applications, the Editor shall proceed with the implementation of a cookie on the
                    computer terminal of the Internet User. This cookie is used to store information about the Site’s
                    browser (date, page, hours) as well as any data entered by Members during their visit (search,
                    login, email, and password). These cookies are meant to be kept on the workstation of the Internet
                    User for a variable period up to 1 (one) year and may be read and used by the Editor at a subsequent
                    visit of the Internet User on this Site.
                  </p>
                </div>

                <div className='py-2'>
                  <li className='font-medium'>Right to Object to the Implementation of a Cookie</li>
                  <p className="italic py-2">
                      The Internet User has the ability to block, modify the retention period, or delete the cookie through
                      the browser interface (usually: tools or options / privacy or confidentiality). In this case, browsing
                      this Site will not be optimized. If the systematic disabling of the cookies on the browser of the
                      Internet User prevents him/her from using some services or features provided by the Editor, this
                      dysfunction shall not, in any circumstances, constitute damages to the Internet User who shall not
                      claim any compensation thereof.
                  </p>
                </div>

                <div className='py-2'>
                  <li className='font-medium'>Deletion of the Cookies</li>
                  <p className="italic py-2">
                    Internet Users shall also have the option to delete cookies previously present on their computer by
                    going to the menu of their browser for this purpose (usually: tools or options / privacy or
                    confidentiality). Such act has no impact when browsing this Site, but loses all the benefit provided
                    by the cookie to Members. In this case, they will have to capture again all the information about
                    them.
                  </p>
                </div>

              </ol>

              <br />
              <h6 className='text-lg font-semibold'>Use of third party link</h6>
              <p className="italic py-2">
                We may provide links and pointers to internet sites maintained by third parties from our websites
                and apps. Such linked sites are not under our control and we are not responsible for the contents
                (including the accuracy, legality or decency) of any linked site or any link contained in a linked
                site. We are providing these links to you only as a convenience, and the inclusion of any link does
                not imply endorsement by us of the linked site. We are not responsible for the copyright
                compliance of any linked site. To the maximum extent permitted by law, we will not be liable for
                any damages or loss arising in any way out of or in connection with or incidental to any information
                or third party service provided by any third party
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Header