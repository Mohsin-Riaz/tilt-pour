import { FaPlus } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';
import './App.css';
import MediaImage from './components/MediaImage';
function App() {
    return (
        <>
            <main>
                <h1>Tilt Pour Permanent Mould Machine</h1>
                <div className="content">
                    <div className="project">
                        <div>
                            <h2 className="scope">Project Scope</h2>
                        </div>
                        <div>
                            <h3 className="deliverables">Deliverables</h3>
                            <p className="deliverables_text">
                                To deliver a functional design of a mould
                                machine that would be able to tilt-pour molten
                                material into a variety of moulds held by the
                                machine
                            </p>
                        </div>
                        <div className="timeline">
                            <h3>Timeline</h3>
                            <p className="timeline_text">
                                2 weeks research phase
                            </p>
                            <FaPlus className="timeline_icon" />
                            <p className="timeline_text">
                                2 weeks design concept
                            </p>
                            <FaPlus className="timeline_icon" />
                            <p className="timeline_text">
                                1 week initial project review and re-assessment
                            </p>
                            <FaPlus className="timeline_icon" />
                            <p className="timeline_text">
                                12 weeks final design
                            </p>
                            <FaPlus className="timeline_icon" />
                            <p className="timeline_text">
                                1 week formal presentation and project review
                            </p>
                        </div>
                        <div>
                            <h2>Final Design</h2>
                            <p>
                                Final design consists of a 115v motor belt
                                driving a keyed hollow shaft. Belt driven motor
                                controlled by micro-controller provides multiple
                                pouring methods. Hollow shaft is mounted on two
                                ball bearings imbeded into each frame component.
                                Mould mount consists of cage and tool clamps.
                            </p>
                        </div>
                        <div>
                            <h2>Conclusion & Notes</h2>
                            <p>
                                Final machine design was capable of meeting its
                                two functional goals: Able to mount any size of
                                mould and able to rotate the mould during the
                                pouring process. Thermal, vibrational and
                                ergonomic analysis ensured machine stability,
                                operator safety and comfort. Project conclusion
                                well within timeline and budget constraints.
                                Project was deemed a resounding success by
                                supervisors.
                            </p>
                        </div>
                    </div>
                    <div className="media">
                        <MediaImage image={'./images/machine.jpg'} />
                        <MediaImage image={'./images/load.jpg'} />
                        <MediaImage image={'./images/thermal.jpg'} />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
