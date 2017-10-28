import React from 'react';
import reviewService from './../services/reviewService';

export class ReviewForm extends React.Component {
    constructor(){
        super();        
        this.state = {
            rating: 1,
            comment: '',
            productId: 1,
            email: '',
            name: ''            
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.resetReview = this.resetReview.bind(this);
    }

    resetReview(){
        //var self = this
        this.setState({
            rating: 1,
            comment: '',
            productId: 1,
            email: '',
            name: ''            
        });
    }

    handleSubmit(event) {        
        event.preventDefault();
        var self = this;
        return reviewService.createReview(this.state)
        .then(function(res){
            if(res.status) {                
                console.log('success');
                self.resetReview();
            }
            else {
                console.log('failed');
            }
        });
    }

    onChangeName(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }    

    render() {
        return  (
            <div>
                <h2>Reviews</h2>
                <div className="submit-review">
                    <p>
                        <label htmlFor="name">Name</label> 
                        <input name="name" 
                               type="text"
                               value={this.state.name}
                               onChange={this.onChangeName.bind(this)} />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label> 
                        <input name="email" 
                               type="email" 
                               value={this.state.email}
                               onChange={this.onChangeName.bind(this)} />
                    </p>
                    <div className="rating-chooser">
                        <p>Your rating</p>
                        <div className="rating-wrap-post">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <p>
                        <label htmlFor="comment">Your review</label> 
                        <textarea name="comment" 
                                  cols="30" 
                                  rows="10" 
                                  value={this.state.comment}
                                  onChange={this.onChangeName.bind(this)} />
                    </p>
                    <p>
                        <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)}/>
                    </p>
                </div>
            </div>
        )
    }
}