import BarLocation from "./charts/BarLocation";
import DonutPlatform from "./charts/DonutPlatform";
import DonutRemote from "./charts/DonutRemote";
import DonutStatus from "./charts/DonutStatus";
import LineDate from "./charts/LineDate";

function JSJourney() {


    return (
        <>
            <section class="resume-section" id="journey">
                <div class="resume-section-content">
                    <h2 class="mb-5">Job Search Journey</h2>
                    <div className="row">
                    <div className="col"><DonutStatus /></div>
                    <div className="col"><DonutRemote /></div>
                    </div>
                    <div className="row">
                    <div className="col"><DonutPlatform /></div>
                    <div className="col"></div>
                    </div>
                    <BarLocation />
                    <LineDate />
                    
                    {/* <div className="row-lg">
                        <DonutRemote/>
                    </div>
                    <div className="row-lg">
                        <DonutRemote/>
                    </div>
                    <DonutStatus />
                    <DonutStatus /> */}
                    {/* <div className="col-lg-12">
                            <DonutStatus />
                        </div>
                        <div className="col-lg-12">
                            <DonutPlatform />
                        </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <DonutStatus />
                        </div>
                        <div className="col-lg-12">
                            <DonutPlatform />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg">
                            <DonutRemote />
                        </div>
                        <div className="col-lg">
                            <BarLocation />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <LineDate />
                        </div>
                        <div className="col-lg-12">

                        </div>
                    </div> */}




                </div>

            </section>
        </>
    )
} export default JSJourney;