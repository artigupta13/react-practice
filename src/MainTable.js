import EventsInList from "./EventsInList";
import { Parent } from "./ChildToParentProps";
import UseRef from "./UseRef";
import RefDemo from "./RefDemo";
import EventBubbling from "./EventBubbling";
import AppendList from "./AppendList";
import UpdateDictionary from "./UpdateDictionary";
import SelectPractice from "./SelectPractice";
import ArrayRotation from "./ArrayRotation";
import ContextPractice from "./ContextPractice";
import CountDown from "./CountDown";
import ReduxExample from "./ReduxExample";

export default function MainTable(){
    return(
    <div>
        <table className="main_table">
        <tr>
          <td>
            <EventsInList />
          </td>
          <td>
            <UseRef />
          </td>
          <td>
            {" "}
            <Parent />
          </td>
          <td>
            {" "}
            <RefDemo />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <AppendList />
          </td>
          <td>
            {" "}
            <UpdateDictionary />
          </td>
          <td>
            <SelectPractice />
          </td>
          <td>
            {" "}
            <ArrayRotation />
          </td>
        </tr>
        <tr>
          <td>
            <EventBubbling />
          </td>
          <td>
            <ContextPractice />
          </td>
          <td>
            <CountDown />
          </td>
          <td>
            <ReduxExample />
          </td>
        </tr>
      </table> 
    </div>
    )
}