import React from "react";
import { Carousel } from "react-bootstrap";

import { Member, MemberResponsive } from "./Member";
import "./Team.css";
import coreData from '../../data/CoreTeamData';
import webTeamData from '../../data/WebTeamMemberData';
import appTeamData from '../../data/AppTeamMemberData';
import eventTeamData from '../../data/EventTeamMemberData';
import designTeamData from '../../data/DesignTeamMemberData';
import publicityTeamData from '../../data/PublicityTeamMemberData';
import contentTeamData from '../../data/ContentTeamMemberData';

export default function Team() {
  return (
    <>
      <TeamNormal />
      <TeamResponsive />
    </>
  );
}

const TeamNormal = () => {

  return (
    <div className="team-normal">
      <h1 className="team-heading" data-aos="slide-up" data-aos-duration="2000">Meet Our Team</h1>
      <div className="lead-container" data-aos="slide-up" data-aos-duration="2000">
      {coreData.map((item, index) => {return (
            <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />);
    }
          )}
        
      </div>
      <div className="team-container" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Web Team</h1>
        <div className="lead-container" data-aos="slide-up" data-aos-duration="2000">
        {webTeamData.map((item, index) => {
            if(item.isLead===true){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
          </div>
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
        {webTeamData.map((item, index) => {
            if(item.isLead===false){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        </div>
      </div>
      <div className="team-container" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">App Team</h1>
        <div className="lead-container" data-aos="slide-up" data-aos-duration="2000">
        {appTeamData.map((item, index) => {
            if(item.isLead===true){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
          </div>
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
        {appTeamData.map((item, index) => {
            if(item.isLead===false){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        </div>
      </div>
      <div className="team-container" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Events Team</h1>
        <div className="lead-container" data-aos="slide-up" data-aos-duration="2000">
        {eventTeamData.map((item, index) => {
            if(item.isLead===true){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
          </div>
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
        {eventTeamData.map((item, index) => {
            if(item.isLead===false){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        </div>
      </div>
      <div className="team-container" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Design Team</h1>
        {designTeamData.map((item, index) => {
            if(item.isLead===true){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
        {designTeamData.map((item, index) => {
            if(item.isLead===false){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        </div>
      </div>
      <div className="team-container" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Publicity Team</h1>
        {publicityTeamData.map((item, index) => {
            if(item.isLead===true){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
        {publicityTeamData.map((item, index) => {
            if(item.isLead===false){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        </div>
      </div>
      <div className="team-container" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Content Team</h1>
        {contentTeamData.map((item, index) => {
            if(item.isLead===true){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
        {contentTeamData.map((item, index) => {
            if(item.isLead===false){return (
              <Member
            img={item.img}
            link={item.link}
            name={item.name}
            designation={item.designation}
          />
              );}
          else
          return null;
    }
          )}
        </div>
      </div>
    </div>
  );
};

const TeamResponsive = () => {

  return (
    <div className="team-responsive">
      <h1 data-aos="slide-up" data-aos-duration="2000" className="team-heading-resp">Meet Our Team</h1>
      <div className="lead-container-resp" data-aos="slide-up" data-aos-duration="2000">
      {coreData.map((item, index) => {
        return (<MemberResponsive
              img={item.img}
              link={item.link}
              name={item.name}
              designation={item.designation}/>);
    })}
      </div>
      <div className="team-container-resp" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Web Team</h1>
        <Carousel>{webTeamData.map((item, index) => {return (
      <Carousel.Item><MemberResponsive
              img={item.img}
              link={item.link}
              
              name={item.name}
              designation={item.designation}
            /></Carousel.Item>);
    }
          )}
    </Carousel>
      </div>
      <div className="team-container-resp" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">App Team</h1>
        <Carousel>{appTeamData.map((item, index) => {return (
      <Carousel.Item><MemberResponsive
              img={item.img}
              link={item.link}
              
              name={item.name}
              designation={item.designation}
            /></Carousel.Item>);
    }
          )}
    </Carousel>
      </div>
      <div className="team-container-resp" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Events Team</h1>
        <Carousel>{eventTeamData.map((item, index) => {return (
      <Carousel.Item><MemberResponsive
              img={item.img}
              link={item.link}
              
              name={item.name}
              designation={item.designation}
            /></Carousel.Item>);
    }
          )}
    </Carousel>
      </div>
      <div className="team-container-resp" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Design Team</h1>
        <Carousel>{designTeamData.map((item, index) => {return (
      <Carousel.Item><MemberResponsive
              img={item.img}
              link={item.link}
              
              name={item.name}
              designation={item.designation}
            /></Carousel.Item>);
    }
          )}
    </Carousel>
      </div>
      <div className="team-container-resp" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Publicity Team</h1>
        <Carousel>{publicityTeamData.map((item, index) => {return (
      <Carousel.Item><MemberResponsive
              img={item.img}
              link={item.link}
              
              name={item.name}
              designation={item.designation}
            /></Carousel.Item>);
    }
          )}
    </Carousel>
      </div>
      <div className="team-container-resp" data-aos="slide-up" data-aos-duration="2000">
        <h1 data-aos="slide-up" data-aos-duration="2000">Content Team</h1>
        <Carousel>{contentTeamData.map((item, index) => {return (
      <Carousel.Item><MemberResponsive
              img={item.img}
              link={item.link}
              
              name={item.name}
              designation={item.designation}
            /></Carousel.Item>);
    }
          )}
    </Carousel>
      </div>
    </div>
  );
};
