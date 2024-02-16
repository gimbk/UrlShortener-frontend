import React, { Component } from 'react'
import UrlService from '../../network/services/UrlService';
import { onlineUrl } from '../../constants/Constants';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
            urlCheck:[],
            isLoadingInfoShow: false,
            isLoading: false,
            isLoadings: false,
            id: null,
            copy:"Copier",
            shortUrl: "",
            originUrl: "",
            showMessage: false,
            message: "",
            urlVar:""
        };
    }
    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.setState({ error: false });
    };

    Save = () => {
        this.setState({ isLoading: true });
        //let longUrl =this.state.originUrl
        let url = {
           longUrl: this.state.originUrl
        }

        UrlService.findOneUrl(url, (response) => {
            this.setState({
                isLoading: false,
                urlCheck: response
            });
        });

        if(this.state.urlCheck == null){
            UrlService.shorten(url, (response) => {
                this.setState({
                    isLoading: false,
                    showMessage: true,
                    message: response.message,
                    color: "#47a44b",
                    urls: response.data[0]
                });
            });
        }else{
            
            this.setState({
                isLoading: false,
                showMessage: true,
                color: "#47a44b",
                urls: this.state.urlCheck
            });
        }


    };

    paste = () => {
        this.setState({ isLoadings: true });
        navigator.clipboard.writeText(onlineUrl+"/api/url/"+this.state.urls.shortUrl);
        this.setState({ isLoadings: false });
        this.setState({ copy: "Copié" });

    };

    componentDidMount() {
        this.setState({urlVar:onlineUrl})
    }

    render() {
        return (
            <main id="main">

                <section id="icon-boxes" className="icon-boxes">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up"></div>

                            <div className="col-md-12 col-lg-9 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title"><a href="">Collez l’URL longue et raccourcissez-la</a></h4>
                                    <div class="input-group">
                                        <input class="cutt_url w-100 p-4 rounded-12"
                                            type="text" placeholder="Votre URL longue" name="originUrl" value={this.state.originUrl}
                                            onChange={this.handleFormChange} />
                                        {
                                            this.state.isLoading ? (

                                                <button class="btn_cutt rounded-6 shortenit_b">
                                                    <div className="spinner-border " role="status">
                                                        <span className="sr-only"></span>
                                                    </div>
                                                </button>

                                            ) : (
                                                <button class="btn_cutt rounded-6 shortenit_b" onClick={this.Save}>Raccourcir</button>

                                            )
                                        }

                                    </div>
                                </div>

                                {
                                    this.state.showMessage ? (
                                        <div>
                                            <h4 className="title" style={{ marginTop: "40px" }}><a href="">Votre Url raccourcis : </a></h4>
                                            <span>{this.state.urlVar}/api/{this.state.urls.shortUrl}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {
                                                this.state.isLoadings ? (

                                                    <button class="btn_cutt rounded-6 shortenit_b">
                                                        <div className="spinner-border " role="status">
                                                            <span className="sr-only"></span>
                                                        </div>
                                                    </button>

                                                ) : (
                                                    <button class="btn btn-success" onClick={this.paste}>{this.state.copy}</button>
                                                )
                                            }
                                        </div>

                                    ) : (

                                        <></>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main