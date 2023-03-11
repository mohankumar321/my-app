
import './App.css';

function App() {
  var opacity ="";
  
  return (
    <div className="App">
     
    
    
    <Pricetable 
    cost="FREE"
    price="$0"
    rightnew1="✔"
    user1="SingleUser"
    right="✔"
    wrong="✖"
    symbol1="✖"
    storage1="5GB Storage"
    public1="Unlimited Public Projects"
    access1="Community Access"
    private1="Unlimited Private Projects"
    symbolnew="✖"
    support1="Dedicated Phone Support"
    domain1="Free Subdomain"
    status1="Monthly Status Reports"


    />
   
    <Pricetable 
    cost="PLUS"
    rightnew2="✔"
    price="$9"
    user2="5Users"
    right="✔"
    wrong="✖"
    symbol2="✔"
    storage2="50GB Storage"
    public2="Unlimited Public Projects"
    access2="Community Access"
    private2="Unlimited Private Projects"
    symbolnew="✖"
    support2="Dedicated Phone Support"
    domain2="Free Subdomain"
    status2="Monthly Status Reports"
    sec="✖"
    />


    <Pricetable 
    cost="PRO"
    rightnew3="✔"
    price="$49"
    user3="Unlimited Users"
    right="✔"
    wrong="✖"
   right3="✔"
    symbol3="✔"
    storage3="150 Storage"
    public3="Unlimited Public Projects"
    access3="Community Access"
    private3="Unlimited Private Projects"
    symbolnew="✔"
    support3="Dedicated Phone Support"
    domain3=" Free Subdomain"
    status3="Monthly Status Reports"
    limited="Unlimited"
     />
</div>

    

  );
}

export default App;

function Pricetable(props) {
  return (
    <div className="container">
      <div className='cards'>
     <span className='price' >
      <h4 className='division'>{props.cost}</h4>
      <h3>{props.price}<span className='month'>/month</span>
      </h3>
      <hr></hr>
     
      </span> 

      <div class="text usernew">
        <div class="text usernew">
        <span className='text user1'>{props.rightnew1}&nbsp;{props.user1}</span>
        <span className='text user'>{props.rightnew2}&nbsp;{props.user2}</span>
        <span className='text user'>{props.rightnew3}&nbsp;{props.user3}</span>
        </div>

        <div className="text ">
        <span className='text store'>{props.rightnew1}&nbsp;{props.storage1}</span>
        <span className='text store'>{props.rightnew2}&nbsp;{props.storage2}</span>
        <span className='text store'>{props.rightnew3}&nbsp;{props.storage3}</span>
       

           </div>
        <div className='text proj'>
        <span className='text proj'>{props.rightnew1}&nbsp;{props.public1}</span>
        <span className='text proj'>{props.rightnew2}&nbsp;{props.public2}</span>
        <span className='text proj'>{props.rightnew3}&nbsp;{props.public3}</span>
       

        </div>
        <div className='text access'>
        <span className='text access'>{props.rightnew1}&nbsp;{props.access1}</span>
        <span className='text access'>{props.rightnew2}&nbsp;{props.access2}</span>
        <span className='text access'>{props.rightnew3}&nbsp;{props.access3}</span>
       </div>

        <div className='text private '>

        <span className='text private1 opacity'>{props.symbol1}&nbsp;{props.private1}</span>
        <span className='text private2'>{props.symbol2}&nbsp;{props.private2}</span>
        <span className='text private3'>{props.symbol3}&nbsp;{props.private3}</span>

        </div>
        <div className='text support'>
        <span className='text support1 opacity'>{props.symbol1}&nbsp;{props.support1}</span>
        <span className='text support2'>{props.symbol2}&nbsp;{props.support2}</span>
        <span className='text support3'>{props.symbol3}&nbsp;{props.support3}</span>

        </div>
        <div className='text domain'>
       <span className='text domain1 opacity'>{props.symbol1}&nbsp;{props.domain1}</span>
        <span className='text domain2'>{props.symbol2}&nbsp;{props.domain2}</span>
        <span className='text domain2'>{props.symbol3}&nbsp;<span className='limi'>{props.limited}</span>{props.domain3}</span>
        

        </div>
        <div className='text status'>
       <span className='text status1 opacity'>{props.symbol1}&nbsp;{props.status1}</span>
        <span className='text status2'>{props.symbol2}&nbsp;{props.status2}</span>
        <span className='text status3'>{props.symbol3}&nbsp;{props.status3}</span>


        </div>
        <button className='btn'>BUTTON</button>
      
      </div>
    </div>
    </div>
  ) 
 
}
