const CtaFeedback = ({title, subtitle}) => {
  return (
      <div className="text-center mx-auto">
        <div className="rounded-xl p-3  border-2 border-text">
          <p className="font-semibold text-black">
            {title}
          </p>
        </div>
      </div>
  );
};

export default CtaFeedback;
