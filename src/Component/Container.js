import React, { useState, useEffect } from 'react';
import contact_icon from "../assets/contact_icon.svg"
import '../styles/card_container.css';

function Container(props) {
    const [productCount,setProductCount] = useState(0)
    const [filteredProducts,setfilteredProducts] = useState([])
    useEffect(()=>{
      setfilteredProducts([])
      setProductCount(0)
      props.product.map((prod,key)=>{
        if(prod.Title.match(props.searchInput) || prod.content.match(props.searchInput)){
          setProductCount((oldCount)=>oldCount+1);
          setfilteredProducts((oldArr)=>[...oldArr, prod]);
        }
      })
      
      },[props.searchInput])
    
    useEffect(()=>{
      console.log(productCount);
      props.ProdCount(productCount)
    },[filteredProducts])
  return (
    <div>
        <div className="card-container uk-padding">
        {(productCount>0)&&<span class="uk-badge uk-margin-small-left">{props.alphabet}</span>}
        <div className="uk-child-width-1-3@m uk-child-width-1-1 uk-grid-match" uk-grid>
        {
          filteredProducts.map((prod,key)=>{
            return <div className='uk-display-inline-block uk-padding-small'>
                <div className="uk-card uk-card-hover uk-card-small uk-card-default " key={key}>
                    <div className="uk-card-body">
                        {(prod["free trial"])&&
                        <div className="uk-card-badge ">
                          <img src={contact_icon} alt="contact icon"/>
                        </div>
                        }
                        <h3 className="uk-card-title product-title">
                          <a className="product-title uk-text-decoration-none uk-text-bold uk-text-primary" href="https://qa-pnx.software.microfocus.com/en-us/products">{prod.Title}</a>
                        </h3>
                        <p className="card-content">{prod.content}</p>
                        {(prod["free trial"])&&<a href="dd" className="uk-button-primary demo-trial-button " target="_blank">Get free trial</a>}
                        {(prod["demo"])&&<a href="dd" className="uk-button-default demo-trial-button uk-text-primary" target="_blank">Request a demo</a>}
                    </div>
                    
                    <div className="uk-card-footer uk-flex uk-flex-wrap">
                    {(prod["Add-ons"])&&
                        <div>
                          <a href="dd" className="uk-text-bold uk-text-primary">Add-ons</a>&emsp;|&emsp;
                        </div>
                    }
                    {(prod["community"])&&
                        <div>
                          <a href="dd" className="uk-text-bold uk-text-primary">Community</a>&emsp;|&emsp;
                        </div>
                    }
                    {(prod["support"])&&
                        <div>
                          <a href="dd" className="uk-text-bold uk-text-primary">Support</a>&emsp;|&emsp;
                        </div>
                    }
                    </div>
                </div>
            </div>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Container;