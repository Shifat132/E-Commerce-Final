import React, { useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Btn from './Btn'
import CustmPcard from './CustmPcard'
import baghslady from '../assets/Bagh.png'
import tables from '../assets/table.png'
import jbl from '../assets/soundbox.png'
import jscket from '../assets/Jacket.png'
import keyboards from '../assets/keyboard.png'
import ledsmonitor from '../assets/led.png'
import remotes from '../assets/Remotecontrols.png'
import chaiars from '../assets/chaiar.png'


const SellinghProducts = () => {



      const [view, setview] = useState(false)


      return (
            <div className=' pb-6 lg:pb-15'>
                  <Container>

                        <div className='flex lg:flex-row flex-col lg:items-stretch gap-6  justify-between items-center'>
                              <SecHead
                                    headtitles='This Month'
                                    headtitletexttwo='Best Selling Products'
                              />
                              {view ? null :

                                    <button onClick={() => setview(true)} className=' cursor-pointer px-12 h-13 bg-primary text-white font-medium mt-11'>View All</button>
                              }
                        </div>

                        <div className='mt-15 lg:flex-row  flex flex-col justify-between '>

                              <div className=''>
                                    <CustmPcard

                                          imgsrc={baghslady}
                                          produtname='The north coat'
                                          price='230'
                                          discauntprice='330'

                                    />
                              </div>



                              <div className=''>
                                    <CustmPcard

                                          imgsrc={jscket}
                                          produtname='The north coat'
                                          price='230'
                                          discauntprice='330'

                                    />
                              </div>





                              <div className=''>
                                    <CustmPcard

                                          imgsrc={tables}
                                          produtname='The north coat'
                                          price='230'
                                          discauntprice='330'

                                    />
                              </div>




                              <div className=''>
                                    <CustmPcard

                                          imgsrc={jbl}
                                          produtname='The north coat'
                                          price='230'
                                          discauntprice='330'

                                    />
                              </div>


                        </div>




                        {
                              view ? <div className='mt-15 flex lg:flex-row flex-col  lg:grid lg:grid-cols-4 gap-7.5 '>

                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={remotes}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>



                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={jbl}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>





                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={tables}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>




                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={baghslady}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>



                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={tables}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>



                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={ledsmonitor}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>





                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={baghslady}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>




                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={chaiars}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>





                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={jbl}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>



                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={jscket}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>





                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={remotes}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>




                                    <div className=''>
                                          <CustmPcard

                                                imgsrc={ledsmonitor}
                                                produtname='The north coat'
                                                price='230'
                                                discauntprice='330'

                                          />
                                    </div>







                              </div>







                                    : null
                        }




                  </Container>

            </div>
      )
}

export default SellinghProducts
