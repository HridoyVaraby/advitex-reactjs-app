import { useContextElement } from "@/context/Context";
import { Link } from "react-router-dom";
import DropdownSelect from "../common/DropdownSelect";
export default function Checkout() {
  const {
    cartProducts,

    totalPrice,
  } = useContextElement();

  return (
    <div className="checkout-product tf-spacing-40">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-8">
            <div className="left">
              <form
                className="form-checkout"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb_33">
                  <h6 className="mb_12">Contact information</h6>
                  <p className="text-body-2 mb_18">
                    We’ll use this email to send you details and updates about
                    your order
                  </p>
                  <fieldset>
                    <input
                      type="email"
                      placeholder="Email address"
                      id="email"
                      className="rounded-cycle"
                      required
                    />
                  </fieldset>
                </div>
                <div className="mb_34">
                  <h6 className="mb_12">Billing address</h6>
                  <p className="text-body-2 mb_18">
                    Enter the billing address that matches your payment method
                  </p>
                  <div className="tf-select-tranform-lable mb_24">
                    <span className="select-label">Country/Region</span>
                    <select id="countrySelect" name="region-choose">
                      <option />
                      <option
                        value="United States"
                        data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['American Samoa','American Samoa'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Armed Forces Americas','Armed Forces Americas'],['Armed Forces Europe','Armed Forces Europe'],['Armed Forces Pacific','Armed Forces Pacific'],['California','California'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District of Columbia','Washington DC'],['Federated States of Micronesia','Micronesia'],['Florida','Florida'],['Georgia','Georgia'],['Guam','Guam'],['Hawaii','Hawaii'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiana','Louisiana'],['Maine','Maine'],['Marshall Islands','Marshall Islands'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['New Mexico','New Mexico'],['New York','New York'],['North Carolina','North Carolina'],['North Dakota','North Dakota'],['Northern Mariana Islands','Northern Mariana Islands'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvania','Pennsylvania'],['Puerto Rico','Puerto Rico'],['Rhode Island','Rhode Island'],['South Carolina','South Carolina'],['South Dakota','South Dakota'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Virgin Islands','U.S. Virgin Islands'],['Virginia','Virginia'],['Washington','Washington'],['West Virginia','West Virginia'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]"
                      >
                        United States
                      </option>
                      <option
                        value="Australia"
                        data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]"
                      >
                        Australia
                      </option>
                      <option value="Austria" data-provinces="[]">
                        Austria
                      </option>
                      <option value="Belgium" data-provinces="[]">
                        Belgium
                      </option>
                      <option
                        value="Canada"
                        data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]"
                      >
                        Canada
                      </option>
                      <option value="Czech Republic" data-provinces="[]">
                        Czechia
                      </option>
                      <option value="Denmark" data-provinces="[]">
                        Denmark
                      </option>
                      <option value="Finland" data-provinces="[]">
                        Finland
                      </option>
                      <option value="France" data-provinces="[]">
                        France
                      </option>
                      <option value="Germany" data-provinces="[]">
                        Germany
                      </option>
                      <option
                        value="Hong Kong"
                        data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]"
                      >
                        Hong Kong SAR
                      </option>
                      <option
                        value="Ireland"
                        data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]"
                      >
                        Ireland
                      </option>
                      <option value="Israel" data-provinces="[]">
                        Israel
                      </option>
                      <option
                        value="Italy"
                        data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]"
                      >
                        Italy
                      </option>
                      <option
                        value="Japan"
                        data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]"
                      >
                        Japan
                      </option>
                      <option
                        value="Malaysia"
                        data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]"
                      >
                        Malaysia
                      </option>
                      <option value="Netherlands" data-provinces="[]">
                        Netherlands
                      </option>
                      <option
                        value="New Zealand"
                        data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','Hawke’s Bay'],['Manawatu-Wanganui','Manawatū-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]"
                      >
                        New Zealand
                      </option>
                      <option value="Norway" data-provinces="[]">
                        Norway
                      </option>
                      <option value="Poland" data-provinces="[]">
                        Poland
                      </option>
                      <option
                        value="Portugal"
                        data-provinces="[['Aveiro','Aveiro'],['Açores','Azores'],['Beja','Beja'],['Braga','Braga'],['Bragança','Bragança'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['Santarém','Santarém'],['Setúbal','Setúbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Évora','Évora']]"
                      >
                        Portugal
                      </option>
                      <option value="Singapore" data-provinces="[]">
                        Singapore
                      </option>
                      <option
                        value="South Korea"
                        data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]"
                      >
                        South Korea
                      </option>
                      <option
                        value="Spain"
                        data-provinces="[['A Coruña','A Coruña'],['Albacete','Albacete'],['Alicante','Alicante'],['Almería','Almería'],['Asturias','Asturias Province'],['Badajoz','Badajoz'],['Balears','Balears Province'],['Barcelona','Barcelona'],['Burgos','Burgos'],['Cantabria','Cantabria Province'],['Castellón','Castellón'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['Cáceres','Cáceres'],['Cádiz','Cádiz'],['Córdoba','Córdoba'],['Girona','Girona'],['Granada','Granada'],['Guadalajara','Guadalajara'],['Guipúzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['Jaén','Jaén'],['La Rioja','La Rioja Province'],['Las Palmas','Las Palmas'],['León','León'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Madrid Province'],['Melilla','Melilla'],['Murcia','Murcia'],['Málaga','Málaga'],['Navarra','Navarra'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanca','Salamanca'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Segovia','Segovia'],['Sevilla','Seville'],['Soria','Soria'],['Tarragona','Tarragona'],['Teruel','Teruel'],['Toledo','Toledo'],['Valencia','Valencia'],['Valladolid','Valladolid'],['Vizcaya','Biscay'],['Zamora','Zamora'],['Zaragoza','Zaragoza'],['Álava','Álava'],['Ávila','Ávila']]"
                      >
                        Spain
                      </option>
                      <option value="Sweden" data-provinces="[]">
                        Sweden
                      </option>
                      <option value="Switzerland" data-provinces="[]">
                        Switzerland
                      </option>
                      <option
                        value="United Arab Emirates"
                        data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]"
                      >
                        United Arab Emirates
                      </option>
                      <option
                        value="United Kingdom"
                        data-provinces="[['British Forces','British Forces'],['England','England'],['Northern Ireland','Northern Ireland'],['Scotland','Scotland'],['Wales','Wales']]"
                      >
                        United Kingdom
                      </option>
                      <option value="Vietnam" data-provinces="[]">
                        Vietnam
                      </option>
                    </select>
                  </div>
                  <div className="grid-2 mb_24">
                    <fieldset>
                      <input
                        type="text"
                        placeholder="First name"
                        id="first-name"
                        className="rounded-cycle"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Last name"
                        id="last-name"
                        className="rounded-cycle"
                        required
                      />
                    </fieldset>
                  </div>
                  <fieldset className="mb_22">
                    <input
                      type="text"
                      placeholder="Address"
                      id="address"
                      className="rounded-cycle"
                      required
                    />
                  </fieldset>
                  <a href="#" className="link text-body-2 mb_18">
                    + Add apartment, suit, etc.
                  </a>
                  <div className="grid-2 mb_24">
                    <fieldset>
                      <input
                        type="text"
                        placeholder="City"
                        id="city"
                        className="rounded-cycle"
                        required
                      />
                    </fieldset>
                    <div className="tf-select-tranform-lable">
                      <span className="select-label">State</span>
                      <select name="region-choose" id="state">
                        <option />
                        <option value="California">California</option>
                        <option value="Alabama">Alabam</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Washington">Washington</option>
                        <option value="Texas">Texas</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Nevada">Nevada</option>
                        <option value="Illinois">Illinois</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid-2">
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Zip Code"
                        id="zip-code"
                        className="rounded-cycle"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        type="number"
                        placeholder="Phone (optional)"
                        id="phone"
                        className="rounded-cycle"
                        required
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="mb_33">
                  <h6 className="title mb_16">Payment options</h6>
                  <div className="notification d-flex gap_16">
                    <div className="icon">
                      <i className="icon-info-circle-solid" />
                    </div>
                    <p className="text-body-2 text_mono-gray-6">
                      There are no payment methods available. This may be an
                      error on our side. Please contact us if you need any
                      <br />
                      help placing your order.
                    </p>
                  </div>
                </div>
                <div className="bot">
                  <div className="align-items-center d-flex gap_8 mb_29">
                    <fieldset className="fieldset-item">
                      <input
                        type="checkbox"
                        name="brand"
                        className="tf-check"
                        id="add"
                        defaultChecked=""
                      />
                    </fieldset>
                    <label className="h6" htmlFor="add">
                      Add a note to your order
                    </label>
                  </div>
                  <p className="text-body-2 mb_41">
                    By proceeding with your purchase you agree to our Terms and
                    Conditions and Privacy Policy
                  </p>
                  <div className="wrap-btn d-flex align-items-center justify-content-between">
                    <Link
                      to={`/cart`}
                      className="link d-flex align-items-center gap_20 text-body-1"
                    >
                      <i className="icon-long-arrow-alt-left-solid" />
                      Back to cart
                    </Link>
                    <a href="#" className="tf-btn btn-primary2 height-2">
                      <span>Place Order</span>
                      <span className="bg-effect" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cart-totals v2">
              <h2 className="title">Cart totals</h2>
              <div className="wrap-info">
                {cartProducts.map((product, i) => (
                  <div key={i} className="info sub-heading d-flex">
                    <div className="name">{product.title}</div>
                    <span>x{product.quantity}</span>{" "}
                    <div className="price sub-heading">
                      ${(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <DropdownSelect
                defaultOption={"Add a coupon"}
                options={["coupon 10%", "coupon 20%"]}
                addtionalParentClass="h6 text_black px-0"
              />
              <div className="sub-total d-flex justify-content-between align-items-center h6">
                <span>Discount</span>
                <span>-{totalPrice ? "$1.796" : 0}</span>
              </div>
              <div className="total h4 d-flex justify-content-between align-items-center">
                <span>Total</span>
                <span>${totalPrice ? (totalPrice - 1.796).toFixed(2) : 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
