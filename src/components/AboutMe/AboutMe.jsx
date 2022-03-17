import React from 'react';
import './AboutMe.css'

const AboutMe = ({lang}) => {
  return (
    <>
    <div className='aboutMe'>
      <a className='aboutMeAnchor' name='aboutMe'></a>
      <div className='aboutMe__content _container'>
      {(() => {
        switch (lang) {
          case 'eng': return(
            <>
              <h2 className='aboutMe__title'>About me</h2>
              <p className='aboutMe__discription'>
                Hi, I'm Denis – UX/UI designer from Minsk. <br/>
                I'm interested in design and everything connected with it. 
                <br/>
                <br/>
                I'm studying at courses "Web and mobile design <br/>
                interface" in IT-Academy.
                <br/>
                <br/>
                Ready to implement excellent projects <br/>
                with wonderful people.
              </p>
            </>
          );
          case 'ru': return(
            <>
              <h2 className='aboutMe__title'>Обо мне</h2>
              <p className='aboutMe__discription'>
                Привет, я Денис – UX/UI дизайнер из Минска. <br/>
                Я интересуюсь дизайном и всем, что с этим связано. 
                <br/>
                <br/>
                Я обучался на курсах "Веб и мобильные дизайн <br/>
                интерфейсы" в IT-Академии.
                <br/>
                <br/>
                Готов создавать прекрасные проекты <br/>
                с замечательными людьми.
              </p>
            </>
          )
        }
      })()}
      </div>
    </div>
    </>
  );
};

export default AboutMe;