import react, { useState } from 'react';
import axios from 'axios';
import '../css/MainContent.css'


const MainContent = props => {




    return(
        <div className='MainContentContainer'>
            <section className='MainHow'>
                <h2>How it works</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sit sed, unde quae mollitia deleniti voluptate distinctio quia dignissimos dolor, voluptas error aliquam. Voluptatum magni odio error aspernatur nobis ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam officia amet porro aperiam at est laboriosam quos quaerat a fugiat excepturi aspernatur architecto odio maiores, repellendus provident consequuntur eveniet.</p>
            </section>
            <section className='MainTeam'>
                <h2>Adding Teammates</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque unde necessitatibus soluta ad, expedita neque molestiae distinctio dolorum? Sapiente neque quam explicabo! Veniam expedita quaerat laborum iure dicta, numquam deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reprehenderit saepe libero excepturi velit, id quis nulla maxime nihil adipisci hic suscipit porro odio assumenda! Eius quisquam quis corporis autem?</p>
            </section>
        </div>
    )
}


export default MainContent;