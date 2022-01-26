import React from "react";
import Input from '../../../components/Input';
import Button from "@material-ui/core/Button";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import importedBookActions from "../../Editor/actions/book";
import Box from '@material-ui/core/Box';
import RestoreIcon from '../../../components/Icon/Restore';
import {Link} from "react-router-dom";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.state = {
      book: {
        id: '',
        name: '',
        author: '',
        genre: '',
        price: '',
      }
    }
  }

  handleNameChange(e) {
    this.setState(prevState => ({
      book: {
        ...prevState.book,
        name: e.target.value,
      }
    }));
  }

  handleAuthorChange(e) {
    this.setState(prevState => ({
      book: {
        ...prevState.book,
        author: e.target.value,
      }
    }));
  }

  handleGenreChange(e) {
    this.setState(prevState => ({
      book: {
        ...prevState.book,
        genre: e.target.value,
      }
    }));
  }

  handlePriceChange(e) {
    this.setState(prevState => ({
      book: {
        ...prevState.book,
        price: e.target.value,
      }
    }));
  }

  saveBook() {
    console.log(this.state.book);
    this.props.actionFetchSaveBook({
      book: this.state.book
      // book: 'test'


      // id: this.state.id,
      // name: this.state.name,
      // author: this.state.author,
      // genre: this.state.genre,
      // price: this.state.price,
    });
    // console.log(this.props);
  }

  componentDidMount() {
    this.props.actionFetchBook({
      id: this.props.match.params.bookId,
    });
    console.log("did mount" + this.props);
    console.log('search: ' + this.props.match.params.bookId);
  }

  setBook = (book) => {
    this.setState({
      book: book,
      // id: book.id,
      // name: book.name,
      // author: book.author,
      // genre: book.genre,
      // price: book.price,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.book !== prevProps.book) {
      this.setBook(this.props.book);
    }
  }

  render() {
    // console.log("render: ", this.props);
    // console.log("name: ", this.state.name);
    console.log("bookId: ", this.props.match.params.bookId);
    let button;
    if (!!this.state.book.id) {
      button = <Button
        onClick={() =>
          this.saveBook()
        }
        variant="outlined"
        style={{
          width: '180px',
          color: 'black',
          fontStyle: 'italic',
          borderColor: 'black'
        }}
      >
        UPDATE
      </Button>
    } else {
      button = <Button
        onClick={() =>
          this.saveBook()
        }
        variant="outlined"
        style={{
          width: '180px',
          color: 'black',
          fontStyle: 'italic',
          borderColor: 'black'
        }}
      >
        <Link
          to={{
            pathname: `/home`,
          }}
        >
          CREATE
        </Link>
      </Button>
    }
    return (
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'start',
          width: '100%',
          paddingTop: '100px'
        }}>
          <div>
            <Box sx={{border: 1, p: 1, background: 'white', width: '290px'}}>
              <div>
                {/*{Object.keys(this.props.book)*/}
                {/*.map((fieldName) => (*/}
                {/*<div>*/}
                {/*<div style={{*/}
                {/*fontStyle: 'italic', fontWeight: 700, background: '#008080',*/}
                {/*width: '290px'*/}
                {/*}}*/}
                {/*>*/}
                {/*{`${fieldName}:`}*/}
                {/*</div>*/}
                {/*<Input*/}
                {/*value={this.state[fieldName]}*/}
                {/*onChange={({ target }) => this.setState({*/}
                {/*[fieldName]: target.value,*/}
                {/*})}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*))*/}
                {/*}*/}
                <div>
                  <div style={{
                    fontStyle: 'italic', fontWeight: 700, background: '#008080',
                    width: '290px'
                  }}
                  >
                    Name:
                  </div>
                  <Input
                    value={this.state.book.name}
                    onChange={this.handleNameChange}
                  />
                </div>
                <div>
                  <div style={{
                    fontStyle: 'italic', fontWeight: 700, background: '#008080',
                    width: '290px'
                  }}
                  >
                    Author:
                  </div>
                  <Input
                    value={this.state.book.author}
                    onChange={this.handleAuthorChange}
                  />
                </div>
                <div>
                  <div style={{
                    fontStyle: 'italic', fontWeight: 700, background: '#008080',
                    width: '290px'
                  }}
                  >
                    Genre:
                  </div>
                  <Input value={this.state.book.genre}
                         onChange={this.handleGenreChange}/>
                </div>
                <div>
                  <div style={{
                    fontStyle: 'italic', fontWeight: 700, background: '#008080',
                    width: '290px'
                  }}
                  >
                    Price:
                  </div>
                  <Input value={this.state.book.price}
                         onChange={this.handlePriceChange}/>
                </div>
              </div>

            </Box>
            <div>

            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
          }}>
            <Button
              onClick={() => {
                this.setState(prevState => ({
                  book: {
                    ...prevState.book,
                    name: this.props.book.name,
                  }
                }));
              }}
              endIcon={<RestoreIcon color="black" size={30}/>}
              style={{
                color: 'black',
                borderColor: 'black',
                height: '40px'
              }}
              variant="outlined"
            />
            <Button
              onClick={() => {
                this.setState(prevState => ({
                  book: {
                    ...prevState.book,
                    author: this.props.book.author,
                  }
                }));
              }}
              endIcon={<RestoreIcon color="black" size={30}/>}
              style={{
                color: 'black',
                borderColor: 'black',
                height: '40px'
              }}
              variant="outlined"
            />
            <Button
              onClick={() => {
                this.setState(prevState => ({
                  book: {
                    ...prevState.book,
                    genre: this.props.book.genre,
                  }
                }));
              }}
              endIcon={<RestoreIcon color="black" size={30}/>}
              style={{
                color: 'black',
                borderColor: 'black',
                height: '40px'
              }}
              variant="outlined"
            />
            <Button
              onClick={() => {
                this.setState(prevState => ({
                  book: {
                    ...prevState.book,
                    price: this.props.book.price,
                  }
                }));
              }}
              endIcon={<RestoreIcon color="black" size={30}/>}
              style={{
                color: 'black',
                borderColor: 'black',
                height: '40px'
              }}
              variant="outlined"
            />

          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {/*<Button*/}
          {/*onClick={() =>*/}
          {/*this.saveBook()*/}
          {/*}*/}
          {/*variant="outlined"*/}
          {/*style={{*/}
          {/*width: '180px',*/}
          {/*color: 'black',*/}
          {/*fontStyle: 'italic',*/}
          {/*borderColor: 'black'*/}
          {/*}}*/}
          {/*>*/}
          {/*UPDATE*/}
          {/*</Button>*/}
          {button}
          <Button
            onClick={() =>
              this.setBook(this.props.book)
            }
            variant="outlined"
            style={{
              width: '180px',
              color: 'black',
              fontStyle: 'italic',
              borderColor: 'black'
            }}
          >
            CANCEL
          </Button>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = state => ({
  book: state.reducer.book,
});

const mapDispatchToProps = (dispatch) => {
  const {
    fetchBook, fetchSaveBook,
  } = bindActionCreators(importedBookActions, dispatch);
  return {
    actionFetchBook: fetchBook,
    actionFetchSaveBook: fetchSaveBook,
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Editor);
