import { Component } from "react";


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {        
        return { 
            hasError: true, 
            error: error
        };  
    }
    componentDidCatch(error, errorInfo) {    

        console.log(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {      
            return (
                <>
                    <p>{this.state.error.message}</p>
                    {this.props.children}
                    
                </>
                

            )    
        }
      
      
        return this.props.children; 
    }
}

export default ErrorBoundary;