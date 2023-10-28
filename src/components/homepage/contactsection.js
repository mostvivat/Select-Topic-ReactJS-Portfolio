import React from "react";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"; 
import Card from "../common/card";

import "./styles/contactsections.css";

const contactsection = () => {
	return (
		<div className="contacts">
			<Card
				icon={faAddressBook}
				title="CONTACT INFORMATION"
				body={
					<div className="contacts-body">
                        <div className="contact">
                            <img
                                src="./icons8-gmail-50.png"
                                alt="Gmail"
                                className="contact-image"
                            />
                            <div className="contact-title">Gmail</div>
                            <div className="contacts-subtitle">
                                pokemost@gmail.com
                            </div>
                        </div>
                        <div className="contact">
                            <img
                                src="./icons8-phone-50.png"
                                alt="Phone"
                                className="contact-image"
                            />
                            <div className="contact-title">Phone Number</div>
                            <div className="contacts-subtitle">
                                097-159-5272
                            </div>
                        </div>
                    </div>
				}
			/>
		</div>
	);
};

export default contactsection;
