import styled from 'styled-components'

const Wrapper = styled.nav`
  .logout-btn {
    position: absolute;
    top:1rem;
    right:2rem;
    padding: 0.7rem 0.7rem;
    border-radius: 10px;
    font-weight: 900;
    background: white;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }

  .logout-btn:hover {
  background: var(--primary-50);
  box-shadow: var(--shadow-3);
}

  .logout-ico {
    background: black;
    margin-right: .5rem;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
  }
`
export default Wrapper
