import React from "react";
import "./escrow1.css";
import "./escrow2.css";

function Escrow() {
  return (
    <div className=" flex justify-center text-white mt-10">
      <div className="flex flex-col w-[60%]">
        <div className="flex justify-center">
          <img
            className="h-48 w-48 rounded-full"
            src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1490070110/ypswagtekdvr8dgf50ee.jpg"
            alt=""
          />
        </div>
        <p className="text-white text-2xl font-bold text-center my-10">
          Escrow is a financial arrangement where a third party holds and
          regulates payment of the funds required for two parties involved in a
          given transaction. It helps make transactions more secure by keeping
          the payment in a secure escrow account which is only released when all
          of the terms of an agreement are met as overseen by the escrow
          company.
        </p>
        <div className="flex">
          <div className="flex grow justify-center">
            <form
              action="https://www.escrow.com/checkout"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="type" value="domain_name" />
              <input
                type="hidden"
                name="non_initiator_email"
                value="tusharhaldia0508@gmail.com"
              />
              <input type="hidden" name="non_initiator_id" value="3225328" />
              <input type="hidden" name="non_initiator_role" value="seller" />
              <input type="hidden" name="title" value="CrowdScape Token" />
              <input type="hidden" name="currency" value="USD" />
              <input type="hidden" name="domain" value="CrowdScape" />
              <input type="hidden" name="price" value="5" />
              <input type="hidden" name="concierge" value="false" />
              <input type="hidden" name="with_content" value="false" />
              <input type="hidden" name="inspection_period" value="1" />
              <input type="hidden" name="fee_payer" value="seller" />
              <input type="hidden" name="return_url" value="" />
              <input type="hidden" name="button_types" value="both" />
              <input type="hidden" name="auto_accept" value="5" />
              <input type="hidden" name="auto_reject" value="4" />
              <input type="hidden" name="item_key" value="undefined" />
              <button class="EscrowButtonSecondary" type="submit">
                Pay Now
              </button>
              <img
                src="https://t.escrow.com/1px.gif?name=bin&price=5&title=CrowdScape%20Token&user_id=3225328"
                // style="display: none"
              />
            </form>
          </div>
          <div className="flex grow justify-center">
            <form
              action="https://www.escrow.com/offer"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="type" value="domain_name" />
              <input
                type="hidden"
                name="non_initiator_email"
                value="tusharhaldia0508@gmail.com"
              />
              <input type="hidden" name="non_initiator_id" value="3225328" />
              <input type="hidden" name="non_initiator_role" value="seller" />
              <input type="hidden" name="title" value="CrowdScape Token" />
              <input type="hidden" name="currency" value="USD" />
              <input type="hidden" name="domain" value="CrowdScape" />
              <input type="hidden" name="price" value="5" />
              <input type="hidden" name="concierge" value="false" />
              <input type="hidden" name="with_content" value="false" />
              <input type="hidden" name="inspection_period" value="1" />
              <input type="hidden" name="fee_payer" value="seller" />
              <input type="hidden" name="return_url" value="" />
              <input type="hidden" name="button_types" value="both" />
              <input type="hidden" name="auto_accept" value="5" />
              <input type="hidden" name="auto_reject" value="4" />
              <input
                type="hidden"
                name="item_key"
                value="36045ae0-7025-11ee-871e-bf2b310da338"
              />
              <button class="EscrowButtonSecondary" type="submit">
                Sell Now
              </button>
              <img
                src="https://t.escrow.com/1px.gif?name=bin&price=5&title=CrowdScape%20Token&user_id=3225328"
                // style="display: none;"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Escrow;
