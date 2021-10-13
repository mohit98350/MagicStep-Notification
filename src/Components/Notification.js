import React from 'react'
import{BsFillBellFill,BsFillChatDotsFill}from "react-icons/bs";
const Notification = () => {
    return (
        <div>

            <h1 >Notification</h1>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12 first">
                        <table>
                            <tr>
                                <td className="fav" style={{paddingRight:20}}><BsFillBellFill size={30}/></td>
                                <td>
                                    <table>
                                        <tr>
                                            <th>Order confirmed</th>
                                        </tr>
                                        <tr>
                                            <td className="third">Your order 4566UZ for Red T Shirt has been confirmed by Raj fashion</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-xl-12 first second">
                        <table>
                            <tr>
                                <td className="fav"style={{paddingRight:20}}><BsFillBellFill size={30}/></td>
                                <td>
                                    <table>
                                        <tr>
                                            <th>Order confirmed</th>
                                        </tr>
                                        <tr>
                                            <td className="third">Your order 4566UZ for Red T Shirt has been confirmed by Raj fashion</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-xl-12 first">
                        <table>
                            <tr>
                                <td className="fav"style={{paddingRight:20}}><BsFillChatDotsFill size={30}/></td>
                                <td>
                                    <table>
                                        <tr>
                                            <th>New message</th>
                                        </tr>
                                        <tr>
                                            <td className="third">Your have recived a new message from Raj fashion</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
