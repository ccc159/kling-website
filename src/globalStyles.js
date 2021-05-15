import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Inconsolata', monospace;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #202B37;
        overflow-x: hidden;
    }

    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Inconsolata', monospace;
        color: #e5eeff;
        font-size: 2.575rem;
        line-height: 3.0625rem;
        font-weight: 600;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #acb6c3;
        font-size: 1.125rem;
        letter-spacing: 1px;
        font-weight: 500;
    }

    h1 {
        font-weight: 600;
    }

    h2 {
        font-weight: 500;
        font-size: 25px;
    }

    h3 {
        font-size: 22px;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #246b68;

        :hover {
            color: #246b68;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }
`;

export default Styles;
