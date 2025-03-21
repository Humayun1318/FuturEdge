
import { useContext, useEffect, useState } from 'react';
import { FaStar, FaClock, FaUserGraduate, FaComment, FaMoneyBillWave, FaUserCircle } from 'react-icons/fa';
import { useFetcher, useParams } from 'react-router-dom';
import { FDataContext } from '../../context/Context';


const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [error, setError] = useState('');
  const { id } = useParams();
  const { data } = useContext(FDataContext);
 

  const renderRatingStars = () => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'}>
        <FaStar className="inline-block" />
      </span>
    ))
  };


  const handleCommentPost = (e) => {
    e.preventDefault()
    
    if (!newComment.trim()) {
      setError('Please write a comment before submitting')
      return;
    }
    const comment = {
      id: Date.now(),
      author: 'anonymous',
      text: newComment,
      timestamp: new Date().toLocaleString(),
    }

    setComments([comment, ...comments])
    setNewComment('')
    setError('')
  }

  const handleReply = () => (
    <textarea
      value={newComment}
      onChange={(e) => {
        setNewComment(e.target.value)
      }}
      placeholder="Share your experience or feedback..."
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 text-2xl"
      rows='3'
    >
    </textarea>
  )
  useEffect(() => {
    if (data?.services?.length) {
      const selectedService = data.services.find((ser) => ser.id === Number(id));
      setService(selectedService || null);
    }
  }, [id, data]);


  if (!service) return <p>Loading service details...</p>;

  return (
    <div className="max-w-10/12 mx-auto rounded-xl  overflow-hidden  my-24">
      {/* service card */}
      <section className="md:flex ">
        {/* Image Section */}
        <div className="md:w-1/3 relative">
          <img
            src={service.image}
            alt={service.service_name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {service.category}
          </span>
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 p-6 h-full">
          {/* Title and Rating */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{service.service_name}</h1>
            <div className="flex items-center">
              {renderRatingStars()}
              <span className="ml-2 text-gray-600">({service.rating} / 5)</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">{service.description}</p>

          {/* Key Details Grid */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <FaMoneyBillWave className="text-green-500 mr-2" />
              <span className="font-semibold">{service.pricing}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="text-blue-500 mr-2" />
              <span className="font-semibold">{service.duration}</span>
            </div>
            <div className="flex items-center col-span-2">
              <FaUserGraduate className="text-purple-500 mr-2" />
              <span className="font-semibold">Counselor: {service.counselor}</span>
            </div>
          </div>

          {/* Action Button */}
          <button className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 font-poppins-specialEle cursor-pointer">
            Book This Session
          </button>

        </div>
      </section>


      {/* comment/feedback of this service */}
      <section className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FaComment className="mr-2 text-blue-600" />
          Feedback & Comments
        </h3>

        {/* Comment Input */}
        <form className="mb-6" onSubmit={handleCommentPost}>
          <div className=''>
            <textarea
              value={newComment}
              onChange={(e) => {
                setNewComment(e.target.value)
              }}
              placeholder="Share your experience or feedback..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 text-2xl"
              rows='3'
            >
            </textarea>

            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}

            <button
              type="submit"
              className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center font-poppins-specialEle cursor-pointer"
            >
              <FaComment className="mr-2" />
              Post Comment
            </button>
         </div>
        </form>


        {/* Comments List */}
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className=" ">
                <div className="flex items-start mb-2 bg-gray-50 p-4 rounded-lg">
                  <FaUserCircle className="text-gray-400 text-xl mr-3" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{comment.author}</p>
                      <p className="text-gray-500 text-sm">{comment.timestamp}</p>
                    </div>
                    <p className="mt-1 text-gray-700">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No comments yet. Be the first to share your thoughts!</p>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;

