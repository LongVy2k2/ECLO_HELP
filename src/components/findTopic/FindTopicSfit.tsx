import { IFindAnswer, ITopic } from '../../common/types';
import { findAnswerSfit} from '../../mock/findanswersfit';
import FindDetailSfit from './detail/FindDetailSfit';
export default function FindTopicERP() {
  return (
    <div style={{ minHeight: '100vh' }} className="w-3/4 flex flex-col">
      <div className="h-2/5 mb-3">
        <h1 className="font-bold text-3xl pb-3 ml-5 mt-10">Tìm câu trả lời theo chủ đề</h1>
        <p className="font-semibold ml-5">
        Các chủ đề của chúng tôi!
        </p>
      </div>
      <div className={`flex flex-row h-3/5 justify-evenly flex-wrap mt-5 `}>
        {findAnswerSfit.map((item: ITopic) => (
          <FindDetailSfit
            link={item.link}
            key={item.id}
            id={item.id}
            highlight={item.highlight}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
