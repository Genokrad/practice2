import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={title ? css.superSection : css.baseSection}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
