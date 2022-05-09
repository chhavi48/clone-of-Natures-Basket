import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <hr />
                <div className="cardimg_icons">
                    <p>Payment Method</p>
                    <img className='ftimg' src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png" alt="" />
                    <div className="social_icon">
                        <p>Keep in Touch</p>
                        <div className='onlyicon'>
                        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/"><i class="fa-brands fa-twitter "></i></a>
                        <a href="https://youtube.com"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/accounts/login/"><i class="fa-brands fa-instagram-square"></i></a>
                        <a href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest"></i></a>
                           
                        </div>
                    </div>

                </div><hr />
                {/* <div className="footer_main"> */}

                    <div className="footer_middle">
                        <div className="footer1">
                            <h3>FRESH & FAST</h3>
                            <div>
                                <h3>GIFT HAMPERS</h3>
                                <p>Birthday & Anniversary Gift Hampers</p>
                                <p>World Cuisine Gift Hampers</p>
                                <p>Organic & Health Gift Hampers</p>
                                <p>Coffee & Tea Gift Hampers</p>
                                <p>Get Well Soon Gift Hampers</p>
                                <p>Cheese & Meat Platters</p>
                            </div>
                            <div>
                                <h3>FRUITS & VAEGETABLES</h3>
                                <p>Vegetables</p>
                                <p>Exotic Vegetables</p>
                                <p>Fruits</p>
                                <p>Organic Fruits & Vegetables</p>
                                <p>Exotic Fruits</p>
                                <p>Canned & Frozen</p>
                                <p>Cold - Pressed Fresh Juices</p>
                            </div>
                            <div>
                                <h3> DELICATESSEN & CHEESE</h3>
                                <p>Fresh Snacks & Party Food</p>
                                <p>Antipasti</p>
                                <p>Gourmet Cheese Shop</p>
                                <p>Cold Cuts & Sausages</p>
                                <p>Cheese Spread, Slices & Others</p>
                            </div>
                        </div>
                        <div className="footer2">
                            <div>
                                <h3>INTERNATIONAL CUISINE</h3>
                                <p>Italian & Continental</p>
                                <p>Middle-Eastern</p>
                                <p>Condiments</p>
                                <p>Flours, Grains & More</p>
                                <p>Mexican</p>
                                <p>Salad Dressing</p>
                                <p>Salt, Sugar & Substitutes</p>
                                <p>Pan-Asian</p>
                                <p>Baking Ingredients</p>
                                <p>Soups</p>
                            </div>
                            <div>
                                <h3> HEALTH</h3>
                                <p>Weight Management Foods</p>
                                <p>Heart - Healthy Foods</p>
                                <p>Wellness & Immunity Boosters</p>
                                <p>Diabetic - Friendly Foods</p>
                                <p>Problem Solution Foods</p>
                                <p>Organic</p>
                            </div>
                        </div>
                        <div className="footer3">
                            <div>
                                <h3>CONFECTIONARY & PATISSERIE</h3>
                                <p>Chocolates</p>
                                <p>Dessert Mixes, Sauces & Toppings</p>
                                <p>Ice Creams & Desserts</p>
                                <p>Confectionery</p>
                                <p>Baking Ingredients</p>
                                <p>Patisserie</p>
                            </div>
                            <div>
                                <h3>MEATS, SEAFOOD AND EGGS</h3>
                                <p>Fresh Meats & Seafood</p>
                                <p>Cold Cuts & Sausages</p>
                                <p>Packaged Sea food & Meats</p>
                                <p>Eggs</p>
                                <p>Frozen</p>
                            </div>
                        </div>
                        <div className="footer4">
                            <div>
                                <h3>BREAKFAST & DAIRY</h3>
                                <p>Cereals, Bars & Others</p>
                                <p>Jams, Preserves & Conserves</p>
                                <p>Honey</p>
                                <p>Indian Breakfast Favourites</p>
                                <p>Spreads</p>
                                <p>Milk, Yogurt & Other Dairy Drinks</p>
                                <p>Butters & Margarines</p>
                                <p>Bakery</p>
                            </div>
                            <div>
                                <h3>INDIAN GROCERY</h3>
                                <p>Flours, Grains & More</p>
                                <p>Cooking Pastes & Sauces</p>
                                <p>Cooking Spices & Powders</p>
                                <p>Salt, Sugar & Substitutes</p>
                                <p>Oils</p>
                            </div>
                        </div>
                                              
                    </div>
                    <hr />
                <p className='last_para'>© 2020 Natures Basket Limited.  All rights reserved.|Privacy Policy|Terms of Use|Home Delivery Number - 8880077745|Site Map|Mobile Site|FSSAI License Number - 11519002000496</p>
            </div>
        </>
    )
}

export default Footer;