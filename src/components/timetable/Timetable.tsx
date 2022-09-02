import React from 'react';
import hornIcon from '../../img/icons/horn.svg';
import editorIcon from '../../img/icons/editor.svg';
import flashIcon from '../../img/icons/flash.svg';
import unionIcon from '../../img/icons/union.svg';
import coffeeIcon from '../../img/icons/coffee.svg';
import starIcon from '../../img/icons/star.svg';

export class Timetable extends React.Component {
  render() {
    return <div className="2xl:w-4/5 lg:mx-auto py-6 pl-8 pr-10">
      <div className="grid grid-cols-8 grid-rows-4
      mx-auto gap-x-4 gap-y-2 mt-10 w-fit">
        <div className={'w-36 h-36 flex justify-end align-middle' +
          ' text-right text-4xl items-center'} >1</div>
        <div className={'w-36 bg-red-8 flex justify-center align-middle' +
          ' items-center'}>
          <img src={hornIcon} alt="" className={'h-24 w-24 text-white'} />
        </div>
        <div className={'w-36 bg-blue-8 flex justify-center align-middle' +
          ' items-center'}>
          <img src={unionIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 bg-blue-8 flex justify-center align-middle' +
          ' items-center'}>
          <img src={unionIcon} alt="" className={'h-20 w-20'} />        </div>
        <div className={'w-36 bg-blue-8 flex justify-center align-middle' +
          ' items-center'}>
          <img src={unionIcon} alt="" className={'h-20 w-20'} />        </div>
        <div className={'w-36 bg-green-10 flex justify-center align-middle' +
          ' items-center'}>
          <img src={flashIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 border-olive-10 border-4 row-span-4'}></div>
        <div className={'w-36 border-olive-10 border-4 row-span-2'}></div>


        <div className={'w-36 h-36 flex justify-end align-middle' +
          ' text-right text-4xl items-center'} >2</div>
        <div className={'w-36 bg-blue-8 flex justify-center align-middle' +
          ' items-center'}>
          <img src={unionIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 row-span-2 flex flex-row gap-x-2'}>
          <div className={'w-full bg-amber-9 flex justify-center' +
            ' align-middle items-center'}>
            <img src={editorIcon} alt="" className={'w-full scale-75'}/>
          </div>
          <div className={'w-full bg-green-10 flex justify-center' +
            ' align-middle items-center'}>
            <img src={flashIcon} alt="" className={'w-full scale-x-50 ' +
              'scale-y-75'}/>
          </div>
        </div>
        <div className={'w-36 row-span-2 flex flex-row gap-x-2'}>
          <div className={'w-full bg-amber-9 flex justify-center' +
            ' align-middle items-center'}>
            <img src={editorIcon} alt="" className={'w-full scale-75'}/>
          </div>
          <div className={'w-full bg-green-10 flex justify-center' +
            ' align-middle items-center'}>
            <img src={flashIcon} alt="" className={'w-full scale-x-50 ' +
              'scale-y-75'}/>
          </div>
        </div>
        <div className={'w-36 row-span-2 flex flex-row gap-x-2'}>
          <div className={'w-full bg-amber-9 flex justify-center' +
            ' align-middle items-center'}>
            <img src={editorIcon} alt="" className={'w-full scale-75'}/>
          </div>
          <div className={'w-full bg-green-10 flex justify-center' +
            ' align-middle items-center'}>
            <img src={flashIcon} alt="" className={'w-full scale-x-50 ' +
              'scale-y-75'}/>
          </div>
        </div>
        <div className={'w-36 row-span-2 flex flex-row gap-x-2'}>
          <div className={'w-full bg-amber-9 flex justify-center' +
            ' align-middle items-center'}>
            <img src={editorIcon} alt="" className={'w-full scale-75'}/>
          </div>
          <div className={'w-full bg-green-10 flex justify-center' +
            ' align-middle items-center'}>
            <img src={flashIcon} alt="" className={'w-full scale-x-50 ' +
              'scale-y-75'}/>
          </div>
        </div>

        <div className={'w-36 h-36 flex justify-end align-middle' +
          ' text-right text-4xl items-center'} >3</div>
        <div className={'w-36 bg-blue-8 flex justify-center align-middle' +
          ' items-center'}>
          <img src={unionIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 bg-red-8 flex justify-center align-middle' +
          ' items-center'}>
          <img src={starIcon} alt="" className={'h-20 w-20'} />
        </div>

        <div className={'w-36 h-36 flex justify-end align-middle' +
          ' text-right text-4xl items-center'} >4</div>
        <div className={'w-36 bg-olive-10 flex justify-center align-middle' +
          ' items-center'}>
          <img src={coffeeIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 bg-olive-10 flex justify-center align-middle' +
          ' items-center'}>
          <img src={coffeeIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 bg-olive-10 flex justify-center align-middle' +
          ' items-center'}>
          <img src={coffeeIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 bg-olive-10 flex justify-center align-middle' +
          ' items-center'}>
          <img src={coffeeIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36 bg-olive-10 flex justify-center align-middle' +
          ' items-center'}>
          <img src={coffeeIcon} alt="" className={'h-20 w-20'} />
        </div>
        <div className={'w-36'}></div>


      </div>
      <div className="grid grid-cols-8 grid-rows-1
      mx-auto gap-x-4 gap-y-2 mt-10 border-t-2 pt-4 w-fit">
        <div className={'h-36 w-36'} ></div>
        <div className={'h-8 text-center text-lg w-36'}>Monday</div>
        <div className={'h-8 text-center text-lg w-36'}>Tuesday</div>
        <div className={'h-8 text-center text-lg w-36'}>Wednesday</div>
        <div className={'h-8 text-center text-lg w-36'}>Thursday</div>
        <div className={'h-8 text-center text-lg w-36'}>Friday</div>
        <div className={'h-8 text-center text-lg w-36'}>Saturday</div>
        <div className={'h-8 text-center text-lg w-36'}>Sunday</div>
      </div>
    </div>;
  }
}

