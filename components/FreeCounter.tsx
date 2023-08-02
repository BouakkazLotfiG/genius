import { Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

import { MAX_FREE_COUNTS } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useProModal } from '@/hooks/use-pro-modal';
import { Badge } from './ui/badge';

export const FreeCounter = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean;
  apiLimitCount: number;
}) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0'>
        <CardContent className='py-6'>
          {!isPro && (
            <>
              <div className='text-center text-sm text-white mb-4 space-y-2'>
                <p>
                  {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                </p>
                <Progress
                  className='h-3'
                  value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                />
              </div>
              <Button
                onClick={proModal.onOpen}
                variant='upgrade'
                className='w-full'
              >
                Upgrade
                <Zap className='w-4 h-4 ml-2 fill-white' />
              </Button>
            </>
          )}
          <div className='text-center text-md font-bold text-white '>
            <p>
              You are a{' '}
              <Badge variant='pro' className='uppercase text-sm py-1'>
                pro
              </Badge>{' '}
              user
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
