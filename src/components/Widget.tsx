import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm/Index';
export function Widget(){
    return(
            <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
                <Popover.Panel>
                    <WidgetForm />
                </Popover.Panel>
                <Popover.Button className='flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group'>
                <ChatTeardropDots className='h-6 w-6'/>
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear'>
                <span className='pl-2'></span>
                    FeedBack
                </span>
                </Popover.Button>
            </Popover>
    )
}