import React from 'react'
import './Value.css'
import{
    Accordion,AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'; 
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
const Value = () => {
  return (
  <section className="v-wrapper">
    <div className="padding innerWidth flesCenter v-container">
        {/*  left side */}
        <div className="v-left">
          <div className="image-container1">
            <img className="img" src="./value.png" alt=""/>
          </div>
          </div>
          {/* right side*/}
          <div className="flexColStart v-right">
            <span className="orangeText right">Our Value</span>
            <span className="primaryText">Value we give to you</span>
            <span className="secondaryText">
              We always ready go help by providing the best services for you
              <br/>
              We beleive a good place to live make your life better
            </span>
            {/*<Accordion 
                  className="accordion"
                  allowMultipleExpanded={false}
                  preExpanded={[0]}
 >
   {
                      data.map((item,i)=>{
                          return(
                        <AccordionItem
                            className="accordionItem"
                        >
                           <AccordionItemHeading>
                            <AccordionItemButton></AccordionItemButton>
                           </AccordionItemHeading>
                           </AccordionItem>
                           );
                             })
                           }
    
                          </Accordion>*/}
                                   </div>
                                        </div>
                                        </section>
 );
};

export default Value;